const Alert = ({estadoAlerta}) => {
  if (estadoAlerta === "success") {
    return (
      <p className="text-success">Registro Exitoso!</p>      
    )
  } else {
    return (
      <p className="text-danger">Completa todos los campos!</p>
    )
  }
};

export default Alert;
