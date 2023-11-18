import React from "react";
import { useParams } from "react-router-dom";


export const User = () => {
  const params = useParams()  // devuelve un objeto
  console.log(params)
  console.log(params.userId)

  return (
    <div>
      <h1>User {params.userId}</h1>
      <p>{(params.userId == '1') ? 'Hola': 'Otro Usuario'}</p>
    </div>
  )
}