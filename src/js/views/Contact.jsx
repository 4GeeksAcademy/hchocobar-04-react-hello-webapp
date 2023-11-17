import React, { useContext } from "react";  // 1. importar el hook useContext
import { Context } from '../store/appContext.js' // 2. importar el Context desde appContext.js


export const Contact = () => {
  const { store, actions } = useContext(Context)  // 3. desestructurar store y actions desde hook (Context)
  console.log(store.cohorte)


  return (
    <div className="container">
      <h1 className="text-success text-center">{store.cohorte}</h1>
      <ul>
        {store.users.map((item, i) => <li key={i}>{item.name} - {item.email} </li> )}
      </ul>
    </div>
  )
}