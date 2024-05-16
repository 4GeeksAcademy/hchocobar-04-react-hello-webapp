import React, { useState, useContext } from "react";
import { Context } from '../store/appContext.js'
// 1. useNavigate desde react-router-dom
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx"


export const ContactForm = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const params = useParams();

  let view = true
  if (params.actions == 'edit') {
    view = false;
  }

  const [name, setName] = useState(store.currentContact.name);
  const [address, setAddress] = useState(store.currentContact.address);
  const [phone, setPhone] = useState(store.currentContact.phone);
  const [email, setEmail] = useState(store.currentContact.email);
  // 2. const navigate = useNavigate()

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newContact = {name, address, phone, email}
    console.log('form:',newContact);
    actions.createContact(newContact)
    // 3. navigate('/contact')
    navigate('/contacts')
  }

  const handleReset = () => {
    navigate("/contacts")
  }

  return (
    <div className="container my-2">
      <h1 className="text-center text-warning">Add Contact</h1>
      {!store.currentContact ? <Spinner /> :
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputFullName" className="form-label">
              Full Name <span className="text-warning" >*</span>
            </label>
            <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="emailHelp"
              value={name} onChange={(e) => setName(e.target.value)} disabled={view}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address  <span className="text-warning" >*</span>
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={email} onChange={(e) => setEmail(e.target.value)}  disabled={view}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone  <span className="text-warning" >*</span>
            </label>
            <input type="text" className="form-control" id="exampleInputPhone"
              value={phone} onChange={(e) => setPhone(e.target.value)}  disabled={view}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address  <span className="text-warning" >*</span>
            </label>
            <input type="text" className="form-control" id="exampleInputAddress"
              value={address} onChange={(e) => setAddress(e.target.value)}  disabled={view}/>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-warning me-3" disabled={view}>Save</button>
            <button type="reset" onClick={handleReset} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      }
    </div>
  )
}