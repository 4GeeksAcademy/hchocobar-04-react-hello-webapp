import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


export const UserDetails = () => {
  const params = useParams();
  console.log("parametros:", params);
  const id = params.userId - 1;
  console.log(id)

  const users = JSON.parse(localStorage.getItem("users"))

  
  console.log(users)
  console.log(typeof (users))


  return (
    <div className="card my-1 mx-3">
      <div className="card-body">
        <h5 className="card-title">User #: {id + 1}</h5>
        <h1 className="card-text">{users[id].name}</h1>
        <p className="card-text">Username: {users[id].username}</p>
        <p className="card-text">Email : {users[id].email}</p>
        <p className="card-text">Phone : {users[id].phone}</p>
        <p className="card-text">Website : {users[id].website}</p>
        <p className="card-text">Company : {users[id].company.name}</p>
        <p className="card-text">Address : {users[id].address.suite} {users[id].address.street}</p>
        <p className="card-text">City : {users[id].address.city}, zip code: {users[id].address.zipcode}</p>
      </div>
    </div>
  )

}