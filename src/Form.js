//Esto será un componente el cual nos renderizará un formlurario de registro
//
import { useState } from "react";

const FormRegister = () =>{

    // como capturar un valor de un input
    const [name,setname] = useState("");
    const [Lname,setLname] = useState("");

    //En react la forma en la cual obtrenemos el valor de un input
    //es usando el onChange este evento nos va a permitir capturar el valor
    //de los inputs en una variable.

    //Recordamos que con event podemos obtener el valor del input
    //event = event.target.value

    //funcion en la cual cada vez que se ejecute el onCHnage se llame y modifque 
    //el valor de la variable "nombre"

    const handleInputName = (event) =>{
        setname(event.target.value)

    }

    const handleInputLName = (event) =>{
        setLname(event.target.value)

    }
    return (
        <div>
        <form action="">
        <h4>Formulario de registro</h4>
        <h4>Hola {name + " " + Lname} </h4>


        <p>
        <input type="text" onChange={
            //al ser un input se sobre entiende que el valor que se envia es un event 
            handleInputName} placeholder="Ingrese su nombre" required / >
        </p>
     
        <p><input type="text" onChange={handleInputLName} placeholder="Ingrese su apellido" required /></p>
        
        <p><input type="email" placeholder="Ingrese su email" required /></p>
        
        <p><input type="password" placeholder="Ingrese su clave" required /></p>
        
        <p>  <button type="submit">Registrar</button></p>
      


        </form>
        </div>
    )
}

export default FormRegister;