import { useState } from "react";
const Formulario = ({setEstadoAlerta}) => {
  const [data, setData] = useState({
    nombreUsuario: "",
    emailUsuario: "",
    passUsuario: "",
    confirmarPassUsuario: "",
  });

  const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  };

  const compararPass = () => {
    return (
      data.passUsuario === data.confirmarPassUsuario
      && data.passUsuario.length >= 8
      && data.passUsuario !== ""
    )
  };

  const handleSubmit = (event) => {
    if (!(data.nombreUsuario && mailRegex.test(data.emailUsuario) && compararPass())) {
      console.log("detener formulario")
      event.preventDefault();
      event.stopPropagation();
      setEstadoAlerta("danger");
    } else {
      setEstadoAlerta("success");
      console.log("salí del if")
      event.preventDefault();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            required
            className="form-control"
            name="nombreUsuario"
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="mb-5">
          <input
            required
            className="form-control"
            name="emailUsuario"
            placeholder="usuario@ejemplo.com"
            onChange={handleChange}
            type="email"
          />
        </div>
        <div className="mb-3">
          <input
            required
            className="form-control"
            name="passUsuario"
            placeholder="Contraseña"
            onChange={handleChange}
            type="password"
          />
        </div>
        <div className="mb-3">
          <input
            required
            className="form-control"
            name="confirmarPassUsuario"
            placeholder="Repite contraseña"
            onChange={handleChange}
            type="password"
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">Registrarse</button>
      </form>
    </>
  )
};

export default Formulario;
