import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const DetailUsersJPH = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="card" >
        <div className="card-header">{store.currentUser.name}</div>
          <img src={`https://randomuser.me/api/portraits/women/${store.currentUser.id}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{store.currentUser.email}</p>
            <p className="card-text">{store.currentUser.website}</p>
            <p className="card-text">{store.currentUser.address.street} {store.currentUser.address.suite}</p>
            <p className="card-text">{store.currentUser.address.city}, zipcode: {store.currentUser.address.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  )
}