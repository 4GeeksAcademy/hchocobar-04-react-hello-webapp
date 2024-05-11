import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx"


export const DetailUsersJPH = () => {
  const { store, actions } = useContext(Context);

  useEffect(()=> {
    if (!store.currentUser) {
      actions.settingMessage('No hay Usuario')
      // preguntar cual es el id que tengo en el url (1-10)
      // si lo tengo hacer un currentUser igual al dato que tengo en el array USer
    } else {
      actions.settingMessage(null)
    }
  }, [])

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        {!store.currentUser ? 
            <Spinner />
          : 
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
        }
      </div>
    </div>
  )
}