import React, { useState, useContext } from "react";  // 1. importar useContext
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";  // 2. importar "Context" desde nuestro provider


export const Users = () => {
  // 3. Desestructurar store, actions desde el "Context" nuestro
  const { store, actions } = useContext(Context);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersLocal")));

  return (
    <div className="container">
      <h1 className="text-primary">Users</h1>
      {!users ?
        <Spinner />
        :
        users.map((user) =>
          <div className="card mb-3">
            <div className="row g-0">
              <h5 className="card-header">{user.name}</h5>
              <div className="card-body">
                <p className="card-subtitle"><i className="fas fa-map-marker-alt me-4"></i>{user.address.suite} {user.address.street}, {user.address.city}</p>
                <p className="card-subtitle"><i className="fas fa-phone me-3"></i>{user.phone}</p>
                <p className="card-subtitle"><i className="far fa-envelope me-3"></i>{user.email}</p>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-danger me-2" onClick={() => { actions.addFavorite(user.name) }}>
                  <i className="fas fa-heart"></i>
                </button>
                <Link to={`/users/${user.id}`} className="btn btn-outline-primary me-2">
                  <i className="fas fa-user"></i>
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
