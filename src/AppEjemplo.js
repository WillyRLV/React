//* desde la version 17 esta linea no hace falyta
//import React FROM "react"

import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import FormRegister from "./Form";
import FormUser from "./FormUser";
// import Home from "./pages/Home";
import "./index.css";


const PrimerComponente = () =>{


  // const edad = 99;

  //React tiene una variable llamada useState
  //use State es una funcion intetrna de react la cual se encarga de manejar el estado las variables
  //para poder usar useState debemos imporrla desde react

  //Al usar useState la forma en la cual creamos una variable cambia porque debemos definir 2 cosas primero el nombre de la variable u segndo la funcion se encargará de cambiar el estado e la variable.
  //count: Esla variable que uaremos poder poder mostrar el valor 
  //setCount: Esla funcion que se encaga de poder asignarle un valor a count


//======================================
//FUNCION PARA SUMAR

const sumar = () => {
  setCount(count + 1)
}

const restar = () => {
  setCount(count - 1)
}

const parametros = (n1,n2) => {
  setCount(n1+n2);
}

  const [count,setCount] = useState(1);
  return (
    
    <div>
      <Header />
      <hr />
      <h1>Hola mundo</h1>
      <div>
        <h4>
Hola desdce el componente {count}
        </h4>

        {/*Vamos a crear 2 botones uno para sumarle 1 a count y otro para restarle*/
        
        /*En react se usa onClick */}
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
{/*Si queremos usar parentesis al momento de llamar a una funcion debemos primera ejecutarla como un callback*/}
{/* Ademas es la forma en el caso nuestra reciba algun parametro*/
}

        <button onClick={() => parametros(10,20)}>Restar</button>
      </div>
      {/* <FormRegister/> */}
      <FormUser/>

<Footer/>
    </div>
  );

};

export default PrimerComponente;