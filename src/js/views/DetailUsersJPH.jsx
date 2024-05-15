import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx"
import { useParams, useNavigate } from "react-router";


export const DetailUsersJPH = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();  // devuelve un objeto
  const navigate = useNavigate();

  const userExist = () => {
    if (localStorage.getItem('usersLocalStorage')) {
      actions.settingUsers(localStorage.getItem('usersLocalStorage'));
      const detalles = store.users.filter((item) => item.id == params.userId);  // deveulve un array
      actions.settingUser(detalles[0]);
    } else {
      navigate('/users');
    }

  }

  const imgError = (event) => {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
  }

  useEffect(()=> {
    if (!store.currentUser) {
      userExist()
      actions.settingMessage('No hay Usuario')
      // preguntar cual es el id que tengo en el url (1-10)
      // si lo tengo hacer un currentUser igual al dato que tengo en el array USer
    } else {
      actions.settingMessage(null)
    }
  }, [])

  return (
    <div className="row justify-content-center">
      <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2">
        {!store.currentUser ? 
            <Spinner />
          : 
            <div className="card" >
              <div className="card-header">{store.currentUser.name}</div>
              {/* <img src={`https://randomuser.me/api/portraits/women/${store.currentUser.id}.jpg`} className="card-img-top" alt="..." /> */}
              <img src={`https://starwars-visualguide.com/assets/img/planets/${store.currentUser.id}.jpg`} 
                   onError={imgError} className="card-img-top" alt="..." />
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