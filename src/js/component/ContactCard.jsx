import React from "react";
// import { FontAwesome }


// <FontAwesomeIcon icon="fa-solid fa-phone" />

export const ContactCard = () => {

  let title = 'Titulo de la Card'

  return (
    <div className="card mb-3 d-flex justify-content-between" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{'Address'}</p>
            <p className="card-text">{'Last updated 3 mins ago'}</p>
            <p className="card-text">{'Last updated 3 mins ago'}</p>
          </div>
        </div>
        <div className="col-md-2">
          botones
        </div>
      </div>
    </div>
  )
}