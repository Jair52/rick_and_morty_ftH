import { regexEmail, regexPassword } from "./constants";

export default function validation(input){
  const errors ={};
  

  //*email
  if(!input.email.length) errors.email = "Ingrese su email";
  else{
    if(!regexEmail.test(input.email)) errors.email = "Debe ingresar un email valido";
    if(input.email.length >= 35) errors.email = "email menor a 35 caracteres";
  }

  //*password
  if(!input.password.length) errors.password = "Ingrese su email";
  else{
    if(!regexPassword.test(input.password)) errors.password = "Debe tener al menos un numero";  
    if(input.password.length <= 6 && input.password.length >= 10) errors.password = "El password debe tener minimo 6 y maximo 10 caracteres";
  }

  return errors;
}

// console.log(validation({
//     email: 'abc',
//     password: '123'
// }))