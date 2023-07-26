import React, { useState, useEffect } from "react";  // 1. importar useContext
import { Spinner } from "../component/Spinner.jsx";
// 2. importar Context desde appContext

export const Posts = () => {
  // 3. [store, actions] desestructurar el useContext()
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postsLocal')));  // post es un ESTADO de REACT
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersLocal")));

  /* if (localStorage.getItem("usersLocal") !== null) {  // 1.
    setUsers(JSON.parse(localStorage.getItem("usersLocal")))  // 1.1
  } else {  // 1.2.
    console.log(error)
  } */

  /* const getPosts = async () => {
    if (localStorage.getItem('postsLocal') !== null) {
      setPosts(JSON.parse(localStorage.getItem("postsLocal")))
    } else {
      const url = "https://jsonplaceholder.typicode.com/posts/"
      const request = {
        method: "GET"
      }
      const response = await fetch(url, request)
      if (response.ok) {
        const data = await response.json();
        setPosts(data)
        localStorage.setItem("postsLocal", JSON.stringify(data))
      } else {
        // redirecionar a una pagina 404
        // analizar el error que me devuelve el back (no javascript)
           // si el user es incorrecto, entonces avisarle al usuario
           // 
        // si el erros est timeout redireccionar a un Intetnte mas tarde
        console.log("error: ", response.status, response.statusText);
      }
    }
  }; */

  /* const postPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/"
    const requestOptions = {
      method: 'POST',
      headers: {
        contentType: "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      redirect: 'follow'
    };

    const response = await fetch(url, requestOptions)
    if (response.ok) {
      // agregar el post nuevo al array o leer de nuevo todos los posts. 

    } else {
      console.log("error : ", response.status, response.statusText)
    }

  } */

/*   useEffect(() => {
    getPosts();
  }, [])
 */

  return (
    <div className="container">
      <h1 className="text-primary">Posts</h1>
      {!posts || !users ? 
        <Spinner/>
      :
        posts.map((post) => 
          <div className="card text-start">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle text-danger">{users[post.userId - 1].name}</h6>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-danger" onClick={() => {}}>
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}