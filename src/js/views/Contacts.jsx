import React, { useContext } from "react";  // 1. importar el hook useContext
import { Context } from '../store/appContext.js' // 2. importar el Context desde appContext.js
import { Link } from "react-router-dom";


export const Contacts = () => {
  const { store, actions } = useContext(Context)  // 3. desestructurar store y actions desde hook (Context)

  const urlImg = 'https://starwars-visualguide.com/assets/img/characters/'

  const handleError = (event) => {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
  }

  const handleEdit = () => {

  }

  const handleDelete = (id) => {
    // llamar un actions.deleteContact()
    /* const newList = store.contacts.filter((item) => item.id !== id)
    console.log(newList) */
    actions.deleteContact(id);

  }

  return (
    <div className="container  mt-2">
      <h1 className="text-warning text-center">{store.cohorte}'s Agenda</h1>
      <div className="d-flex justify-content-end my-2">
        <Link to="/add-contact">
          <button className="btn btn-warning">Add Contact</button>
        </Link>
      </div>
      <div>
        {store.contacts.map((item, id) => {
          const position = id + 1;
          return (
            <div className="card" key={id}>
              <div className="row">
                <div className="col-md-3">
                  <img src={`${urlImg}${position}.jpg`} onError={handleError}
                    className="img-fluid rounded-start" alt="..."
                    style={{ width: '150px' }} />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{item.full_name}</h5>
                    <p className="card-text">{item.email}</p>
                    <p className="card-text">{item.phone}</p>
                    <p className="card-text">{item.address}</p>
                    <p className="card-text">{item.id}</p>
                    {/* <Link to={`/contacts/${id}`} className="btn btn-primary">Details</Link> */}
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <span onClick={() => handleDelete(item.id)}><i className="fa fa-trash fa-lg text-danger"></i></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}