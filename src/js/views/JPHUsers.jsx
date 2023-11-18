import React, { useEffect, useState } from "react";
import { Spinner } from '../component/Spinner.jsx';


export const JPHUsers = () => {
  const [users, setUsers] = useState()

  const base_url = 'https://jsonplaceholder.typicode.com'
  const posts = {
    title: 'Titulo del Post',
    body: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    userId: 2,
  }

  const updatePost = {
    id: 10,
    title: 'Titulo nuevo del Post 10',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo quam in diam lacinia, sed tempor purus scelerisque. Pellentesque leo ex, molestie id metus et, consectetur semper eros. Sed vestibulum, felis quis porttitor consequat, mi nisi facilisis nisi, nec consectetur lectus sem ac arcu. Nullam varius nisl sed arcu hendrerit, a fringilla arcu tristique. Suspendisse ac elementum massa. Integer mattis eros at mi aliquam, non mattis lorem rutrum. Integer commodo aliquet venenatis. Praesent eleifend pharetra commodo ',
    userId: 1,
  };


  // GET para una API
  const getUsers = async () => {
    const url = base_url + '/users'
    const options = {
      method: 'GET'
    }
    const response = await fetch(url, options);
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setUsers(data)
    } else {
      // tratamiento del error que me la API
      console.log('Error: ', response.status, response.statusText)
    }
  }

  // POST
  const createPosts = async () => {
    const url = base_url + '/posts';
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(posts)
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log('Response: ', response.status, response.statusText)
      console.log(data)
    } else {
      // Realizo el tratamiento del error
      console.log('Error: ', response.status, response.statusText)
    }

  }

  // PUT
  const updateData = async () => {
    const url = base_url + '/posts/10'  //1
    const options = {
      method: 'PUT',
      body: JSON.stringify(updatePost),
      headers: {
        "Content-Type": 'application/json; charset=UTF-8'
      }
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText)
    }
  }

  // DELETE
  const deleteData = async () => {
    const url = base_url + '/posts/10';
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json()
      // Manejo la respuesta
      console.log(data);
    } else {
      // Manejo el error
      console.log('Error: ', response.status, response.statusText)
    }
  }

  // similar .onload()
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container mt-3">
      <h1>Users</h1>
      <button type="button" onClick={createPosts} className="btn btn-success me-2">
        Create Posts
      </button>
      <button type="button" onClick={updateData} className="btn btn-success">
        Update Posts
      </button>
      <button type="button" onClick={deleteData} className="btn btn-danger">
        Delete Posts
      </button>
      <div className="bg-light">
        <div>
          {users ? users.map((item) => {
            return (
              <div className="card mp-2">
                <h2 className="card-title">{item.id} - {item.name}  </h2>
                <p className="card-text">{item.email}</p>
                <p className="card-text">{item.address.city}</p>
                <i className="fas fa-trash text-danger"></i>
              </div>
            )
          })
            : <Spinner />}
        </div>
        {/*         <ul>
         { users ? users.map((item) => {
                     return (
                      <li>{item.id} - {item.name}  <i className="fas fa-trash text-danger"></i></li>
                     )
                    } ) 
          : ''}

        </ul> */}
      </div>
    </div>
  )

}