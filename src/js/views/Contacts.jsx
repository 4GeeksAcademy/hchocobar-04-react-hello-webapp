import React, { useContext } from "react";  // 1. Importar el hook useContext 
// 2. Importar el Context desde el archivo appContext.js
import { Context } from '../store/appContext.js';


export const Contacts = () => {
  // 3. Desecturar store, actions utilizando el hook useContext desde Context
  const { store, actions } = useContext(Context);
  console.log(store.cohorte)

  const viewTask = (item) => {
  }

  const editTask = (item) => {
  }

  const deleteTask = (item) => {
  }

  return (
    <div className="container text-center">
      <h1 className="text-success">Contacts</h1>
      <h2 className="text-primary">{store.cohorte}</h2>
      <ul className="list-group">
        {store.users.map((item) => 
          <li class="list-group-item d-flex justify-content-between">
            {item.name}
            <div>
              <span onClick={() => { viewTask(item) }} className="mx-2">
                <i class="fas fa-eye"></i>
              </span>
              <span onClick={() => { editTask(item) }} className="mx-2">
                <i class="fas fa-edit"></i>
              </span>
              <span onClick={() => { deleteTask(item) }} className="mx-2 text-danger">
                <i class="fas fa-trash"></i>
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}