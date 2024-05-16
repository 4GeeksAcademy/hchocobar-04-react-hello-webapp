import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const AddContact = () => {
  // Dispongo del Context
  const { actions } = useContext(Context)
  // Controlar las entradas
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ address, setAddress ] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // const dataToSend = {name, email, phone, address}
    const dataToSend = {
      name: name,
      email: email,
      phone: phone,
      address: address
    }
    // console.log(dataToSend);
    actions.addContact(dataToSend);
    navigate('/contacts')
  }

  return (
    <div className="container">
      <h1 className="text-center">Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" 
            value={name} onChange={(event) => setName(event.target.value)}/>
        </div>  <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="inputPhone" 
            value={phone} onChange={(event) => setPhone(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" 
            value={address} onChange={(event) => setAddress(event.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary ms-2">Cancel</button>
      </form>
    </div>
  )
}