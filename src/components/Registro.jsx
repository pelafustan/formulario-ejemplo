import Alert from "./Alert.jsx";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
const Registro = ({ estadoAlerta, setEstadoAlerta }) => {
  return (
    <>
      <div className="container registro">
        <h1 className="mb-5">Crea tu cuenta</h1>
        <div className="mb-4">
          <SocialButton
            iconName="Facebook"
            color="rgba(0, 0, 0, 0.4)"
            size={86}
            className="align-top px-2"
          />
          <SocialButton
            iconName="Github"
            color="rgba(0, 0, 0, 0.4)"
            size={86}
            className="align-top px-2"
          />
          <SocialButton
            iconName="Linkedin"
            color="rgba(0, 0, 0, 0.4)"
            size={86}
            className="align-top px-2"
          />
        </div>
        <p>o usa tu email para registrarte</p>
        <Formulario setEstadoAlerta={setEstadoAlerta} />
        <Alert estadoAlerta={estadoAlerta} />
      </div>
    </>
  )
};

export default Registro;
