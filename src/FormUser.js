import { useState } from "react";
import { Components } from "react";
import {TextField, Button,state } from "@mui/material";

const FormUser = () => {

//lA OTRA FORMA EN LA CUAL PODEMOS GUARDAR LOS DATOS DE LOS TextFieldS
//esun objeto para ello necesitamos que los TextFields tengan un name
//para que sirvan como un "key" y el valor sea único de cada uno de ellos.

//ahora crearemos una variable que tenga por default un objeto con los keys
const [valorTextField, setValorTextFields] = useState({
    name: '',
    Lname: '',
    email: '',
    pass: '',
})

//construir una funcion que se encargue de almacenar los valores de los
//TextFields en el objeto 

const handleTextFieldValues = e =>{
    //extrar 2 cosas de event
    //1 el name de cada TextField
    //2 el value de cada TextField
    //name = e.target.name
    // value = e.target.value

    const {  name , value} =e.target 
//"..." es para una copia del objeto actual y ademas estmaos agregando
//ek byevo key y valye que recibimos 
//[name] es una variable por ende para poder usarla como key
//debemos colarla entre []
    setValorTextFields({
        ...valorTextField,
        [name]:value,
    })
};


  return (
    <div>
      <form action="">
        <h4 className="title">Formulario de Usuarios</h4>
        <h5>Nombre {valorTextField.name} </h5>
        <h5>Apellido {valorTextField.Lname} </h5>
        <h5>Correo {valorTextField.email} </h5>
        <h5>Contraseña {valorTextField.pass} </h5>

        <p>
          <TextField type="text"     onChange={handleTextFieldValues} name="name" variant="outlined"   label="Ingrese su nombre" required />
        </p>

        <p>
          <TextField type="text" onChange={handleTextFieldValues} name="Lname" placeholder="Ingrese su apellido" required />
        </p>

        <p>
          <TextField type="email" onChange={handleTextFieldValues} name="email" placeholder="Ingrese su email" required />
        </p>

        <p>
          <TextField type="password" secureTextEntry={true} onChange={handleTextFieldValues} name="pass" placeholder="Ingrese su clave"  required />
        </p>

        <p>
          {" "}
          <Button variant="contained" type="submit">Registrar</Button>
        </p>
      </form>
    </div>
  );
};

export default FormUser;
