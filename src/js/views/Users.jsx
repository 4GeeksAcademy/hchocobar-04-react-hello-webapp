import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo from "../../img/gravatar-hector.png"

export const Users = () => {

  const [users, setUsers] = useState();

  const getUsers = async () => {
    // 1. Verifico si tengo los usersLocal en el localStorage
    //   1.1. Si están, actualizo "estado" mediante setUsers() desde los datos del "localStorage"
    //   1.2. Sino no están, realizo el fetch, guardo datos en el "estado" y en el "localStore"
    //     1.2.1. Realizo el fetch()
    //     1.2.2. Almaceno data en el "estado"
    //     1.2.3. Almaceno data en "localStorage"
    if (localStorage.getItem("usersLocal") !== null) {  // 1.
      setUsers(JSON.parse(localStorage.getItem("usersLocal")))  // 1.1
    } else {  // 1.2.
      const response = await fetch("https://jsonplaceholder.typicode.com/users")  // 1.2.1
      if (response.ok) {
        const data = await response.json()
        setUsers(data)  // 1.2.2.
        localStorage.setItem('usersLocal', JSON.stringify(data))  // 1.2.3
      } else {
        console.log("error: ", response.status, response.statusText);
      }
    }
  }

  useEffect(() => {
    getUsers();
  }, [])


  return (
    <div className="container">
      <h1 className="text-primary">Users</h1>
      {!users ?
        "leyendo datos"
        :
        users.map((user) =>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-2 text-center">
                <img src={photo} className="img-fluid rounded-circle mt-3" alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-subtitle"><i class="fas fa-map-marker-alt me-4"></i>{user.address.suite} {user.address.street}, {user.address.city}</p>
                  <p className="card-subtitle"><i class="fas fa-phone me-3"></i>{user.phone}</p>
                  <p className="card-subtitle"><i class="far fa-envelope me-3"></i>{user.email}</p>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <div className="card-body me-3">
                  <Link to={`/users/${user.id}`} className="btn btn-outline-secondary me-2">
                  <i class="fas fa-user"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
