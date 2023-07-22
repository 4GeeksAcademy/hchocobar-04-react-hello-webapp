import React, { useState, useEffect } from "react";


export const Posts = () => {
  const [posts, setPosts] = useState();  // post es un ESTADO de REACT
  const host = "https://jsonplaceholder.typicode.com/";

  const fetchPost = async () => {
    const url = host + "posts/"
    const request = {
      method: "GET"
    }

    const response = await fetch(url, request)
    if (response.ok) {
      const data = await response.json();
      setPosts(data)
    } else {
      // redirecionar a una pagina 404
      // analizar el error que me devuelve el back (no javascript)
         // si el user es incorrecto, entonces avisarle al usuario
         // 
      // si el erros est timeout redireccionar a un Intetnte mas tarde
      console.log("error: ", response.status, response.statusText);
    }

  };

  const postPosts = async () => {
    const url = host + "posts/"
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

  }

  useEffect(() => {
    fetchPost();
  }, [])


  return (
    <div className="container">
      <h1 className="text-primary">Posts</h1>
      {!posts ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> :
        posts.map((post) => <div className="card text-start">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle">{post.userId}</h6>
            <p className="card-text">{post.body}</p>
          </div>
        </div>)}
    </div>
  )
}