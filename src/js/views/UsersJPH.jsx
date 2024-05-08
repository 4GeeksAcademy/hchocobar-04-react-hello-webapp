import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const UsersJPH = () => {
  const { store, actions } = useContext(Context)

  const handlEye = (user) => {
    actions.settingUser(user)
    // Si tengo que realizar un fetch() para traer datos de una API...
    //    opcion 1: hacer aquí el fetch() a la API
    //    opcion 2: ejecutar un actions que tenga el fetch() a la API
  }

  return (
    <div className="container text-start">
      <h1 className="text-center text-success">Consumiendo APIs con fetch()</h1>
        <ul className="list-group">
          {store.users.map((item) => 
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              {item.name}
              <div>
                {/* <Link className="text-primary me-2" to={`/user-details/${item.id}`} */}
                <Link className="text-primary me-2" to={`/user-details/${item.id}`}
                  onClick={() => handlEye(item)}>
                  <i className="far fa-eye"></i>
                </Link>
                <span className="text-success me-2"><i className="far fa-edit"></i></span>
                <span className="text-danger"><i className="fas fa-trash"></i></span>
              </div>
            </li>
          )}
        </ul>
    </div>
  )
}

 /* 
  const getUsers = async () => {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    const options = {
      method: 'GET'
    };
    const response = await fetch(uri, options)  // esta instrucción es la q demora, por ello tenmos que esperarla (await)
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.ok, response.status, response.statusText);
      // El return es muy importante, salimos de la función
      return 'Error: ' + response.status + ' - ' + response.statusText
    }
    console.log('Esto se ejecuta si la resputas es true');
    // console.log(response);
    const data = await response.json();
    console.log(data)
    setUsers(data)
  } 
  */
