import React, { useState, useContext } from "react";
import { Context } from '../store/appContext.js'
// 1. useNavigate desde react-router-dom
import { useNavigate } from "react-router-dom";


export const AddContact = () => {
  const { store, actions } = useContext(Context)
  const [ name, setName ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ phone , setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  // 2. const navigate = useNavigate()
  const navigate = useNavigate()

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newContact = {name, address, phone, email}
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
          <button type="submit" className="btn btn-warning me-3">Save</button>
          <button type="reset" onClick={handleReset} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  )
}