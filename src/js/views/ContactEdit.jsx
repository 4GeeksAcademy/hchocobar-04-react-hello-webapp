import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const ContactEdit = () => {
  const { store, actions } = useContext(Context)
  const details = store.currentUser;
  console.log(details);

  

  return (
    <div className="container">
      <h1 className="text-center">Editar</h1>
      <h2>{'hola'}</h2>

      { !details ? <h2>{'Sin Datos para mostrar'}</h2>  : 
      <div>
        <p>{details.name}</p> 
        <p>{details.phone}</p> 
        <p>{details.email}</p> 
        <p>{details.company.name}</p> 
        <p>{details.address.street} {details.address.suite}</p> 
        <p>{details.name}</p> 
      </div>
      }
     
    </div>
  )
}