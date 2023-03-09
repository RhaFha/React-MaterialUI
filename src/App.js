import React, { useState } from "react";


//componentes
import Perfil from "./componentes/Perfil";

function App() {

  const [nombre, setNombre] = useState('No tiene nombre');

  function changeNombre(e){
    setNombre(e.target.value);
  }

  return (
    <div className="App">
      <h1>{nombre}</h1>
      <input name='nombre' tupe='text' onChange={changeNombre} />
      <Perfil atributomio={nombre} />
    </div>
  );
}

export default App;
