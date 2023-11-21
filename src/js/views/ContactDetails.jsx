import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const ContactDetails = () => {
  const { store, actions } = useContext(Context);
  // recuperar el parámetro de la url
  const params = useParams();
  const subindice = params.contactId
  const person = store.users[subindice]

  return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{() => person.name}</h5>
          <p className="card-text">{() => person.email}</p>
          <p className="card-text">{() => person.company.name}</p>
          <p className="card-text">{() => person.address.city}</p>
        </div>
        <Link to={`/contact`} className="btn btn-success">Contact</Link>
      </div>
    )
  }
