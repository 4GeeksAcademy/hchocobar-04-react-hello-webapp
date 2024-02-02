import React, { useContext } from "react";  // 1. Importar el hook useContext 
// 2. Importar el Context desde el archivo appContext.js
import { Context } from '../store/appContext.js';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const Contacts = () => {
  // 3. Desecturar store, actions utilizando el hook useContext desde Context
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  const viewTask = (item) => {
    console.log(item)
    navigate('/contacts/' + item - 1)
  }

  const editTask = (item) => {
    actions.assignUser(item);
    navigate('/contacts-edit');
  }

  const favoriteTask = (item) => {
    actions.addFavorites(item.name)
  }

  const deleteTask = (item) => {
  }

  return (
    <div className="container text-center">
      <h1 className="text-success">Contacts</h1>
      <h2 className="text-primary">{store.cohorte}</h2>
      <ul className="list-group">
        {store.users.map((item) => 
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name}
            <div>
                <Link to={'/contacts/' + item.id}>
                  <span className="mx-2">
                    <i className="fas fa-eye"></i>
                  </span>
                </Link>
              <span onClick={() => { editTask(item) }} className="mx-2">
                <i className="fas fa-edit"></i>
              </span>
              <span onClick={() => { favoriteTask(item) }} className="mx-2">
                <i className="far fa-heart text-warning"></i>
              </span>
              <span onClick={() => { deleteTask(item) }} className="mx-2 text-danger">
                <i className="fas fa-trash"></i>
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}