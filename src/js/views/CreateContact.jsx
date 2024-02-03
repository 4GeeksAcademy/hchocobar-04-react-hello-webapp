import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";


export const CreateContact = () => {
  const { store, actions } = useContext(Context);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ address, setAddress ] = useState('');
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const contact = {
      full_name: name,
      email: email,
      agenda_slug: store.agenda,
      address: address,
      phone: phone
    }
    // invocar getUser(contact)
    actions.addContact(contact);
    // ir a la vista de ContactList useNavigate:
    navigate('/contact-list')
  }

  return (
    <div className="container">
      <h1 className="text-center">Agregar Contacto</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">
            Full Name <span className="text-warning" >*</span>
          </label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="emailHelp"
            value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address  <span className="text-warning" >*</span> 
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone  <span className="text-warning" >*</span>
          </label>
          <input type="text" className="form-control" id="exampleInputPhone"
            value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address  <span className="text-warning" >*</span>
          </label>
          <input type="text" className="form-control" id="exampleInputAddress"
            value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary me-3">Save</button>
          <button type="reset" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  )
}