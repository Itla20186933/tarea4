
import React, {useEffect, useState} from 'react';

export default function Devolver(){
  const url ='http://raydelto.org/agenda.php'
  const [contactos,setContactos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setContactos(responseJSON)
    console.log(responseJSON)
  }

  useEffect(() => {
     fetchApi() 
     
  }, [])
return(
<div class="contactoH">
      <ul>
        { !contactos ? 'cargando...':
         contactos.map( (contacto,index)=>{
           return <li key={index}>nombre: {contacto.nombre} apellido: {contacto.apellido} telefono: {contacto.telefono} {contacto ?'☑️':'❌'}</li>
         })
        }
        </ul>
        </div>
);
}