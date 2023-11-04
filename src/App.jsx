import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Registro from "./components/Registro.jsx"

function App() {
  const [estadoAlerta, setEstadoAlerta] = useState("");
  return (
    <Registro estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
  )
}

export default App
