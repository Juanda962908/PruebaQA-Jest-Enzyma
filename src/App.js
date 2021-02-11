import './App.css';
/* import Button from './components/button/Button.jsx' */
import Formulario from './components/Formulario'
import React,{useState} from 'react'



function App() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
  setChecked(event.target.checked);
  };

  const funcionSubmit = () =>{
    alert("Está siendo redirigido")
  }

  const textoLabel = "Quiero recibir información a mi correo electrónico"
  
  

  return (
    <div className="App">
      <header className="App-header">
       
        <Formulario
        funcionButton = {funcionSubmit}
        checked = {checked}
        handleChange={handleChange}
        textoDeLabel={textoLabel}
        >

        </Formulario>
      </header>
   </div>
  );
}

export default App;
