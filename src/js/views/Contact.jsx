import React, { useContext } from "react";  // 1. Importar el hook useContext 
// 2. Importar el Context desde el archivo appContext.js
import { Context } from '../store/appContext.js';


export const Contact = () => {
  // 3. Desecturar store, actions utilizando el hook useContext desde Context
  const { store, actions } = useContext(Context);
  console.log(store.cohorte)

  return (
    <div className="container text-center">
      <h1 className="text-success">Contacts</h1>
      <h2 className="text-primary">{store.cohorte}</h2>
      <ul className="list-group">
        {store.users.map((item) => <li class="list-group-item">
          {item.name} <i class="fas fa-eye"></i>
          </li>
        )}
      </ul>
    </div>
  )
}