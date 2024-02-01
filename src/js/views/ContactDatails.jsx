import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const ContactDatails = () => {
  const { store, actions } = useContext(Context)
  const params = useParams();
  const id = parseInt(params.idContact) - 1;
  // const details = store.users.filter((item) => item.id == params.idContact)
  const details = store.users[id]
  console.log(details);

  

  return (
    <div className="container">
      <h1 className="text-center">Detalles</h1>
      <h2>{'hola'}</h2>
      { !details ? '' : 
      <div>
        <p>{details.name}</p> 
        <p>{details.phone}</p> 
        <p>{details.email}</p> 
        <p>{details.company.name}</p> 
        <p>{details.address.street} {details.address.suite}</p> 
        <p>{details.name}</p> 
      </div>}
      


    </div>
  )
}