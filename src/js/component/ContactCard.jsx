import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";


export const ContactCard = (props) => {


  return (
    <div className="card mb-3 d-flex justify-content-between" >
      <div className="row g-0">
        <div className="col-md-3 p-2 text-center">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-7 p-2 text-start">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.name}</p>
            <p className="card-text">{props.phone}</p>
            {/* <p className="card-text">{'Last updated 3 mins ago'}</p> */}
          </div>
        </div>
        <div className="col-md-2 p-2 text-end">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-nav">
                <Link className="nav-link" href="#"><FontAwesomeIcon icon={faPen} /></Link>
                <Link className="nav-link" href="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}