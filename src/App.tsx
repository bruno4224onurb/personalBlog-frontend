import Home from './home/home'
import './App.css';
import React, { useState } from 'react';


function App() {
 
  return (
    <>
      <Home/>
    </>
  );
}

//function App() {
//  const [valor, setValor] = useState(0);

 // function handleClick() {
 //   setValor(valor + 1);
//  }
//  return (
    //  <Home  title="Componente Home"
    //         description="Este é um componente Home que recebe props."/>
 //   <div>
 //     <h1>App</h1>
 //     <p>O valor é: {valor}</p>
 //     <button onClick={handleClick}>Adicionar 1</button>
 //   </div>
 // );
//}


export default App;
