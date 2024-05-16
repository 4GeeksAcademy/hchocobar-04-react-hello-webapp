import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";


export const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="text-center">Contactos</h1>
      <p className="text-end">
        <Link to='/add-contact' className="btn btn-success">
          Add Contact
        </Link>
      </p>
      <ul className="list-group">
        {!store.contacts ? <Spinner /> :
          <>
            {store.contacts.map((item) => <li className="list-group-item">{item.name} </li>)}
          </>
        }
      </ul>
    </div>
  )
}