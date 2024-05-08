import React, { useContext } from "react";  // 1. importar el hook useContext
import { Context } from '../store/appContext.js';  // 2. impoprtar el Context


export const Users = () => {
  const { store, actions } = useContext(Context);  // 3. Desestructurar store y actions desde el Context

  return (
    <>
      {/* 4. utilizar el store */}
      <h1>Cohorte: {store.cohorte}</h1>
      <p>Usuario: {store.user}</p>
      <ul>
  
      </ul>
    </>
  )
}
