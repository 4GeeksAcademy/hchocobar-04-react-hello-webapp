import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const AddContact = () => {
  const { store, actions } = useContext(Context)
  // definir todos los estados (de los input) para luego poder controlarlos

  const addContact = () => {
    // event.preventDefaul();
    console.log('Ejecuto Bton');
    const user= {
        full_name: "Hector Chocobar",
        email: "hector@gmail.com",
        agenda_slug: "spain46",
        address:"47568 NW 34ST, 33434 FL, Spain",
        phone:"7864445566"
    }
    actions.addContact(user);
    // ejecutar el actions que envie los datos a la API
  }

  return (
    <div className="container">
      <h1 className="text-primary">Add Contact</h1>
      <form onSubmit={() => addContact() }>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="exampleInputPhone"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputAddress"/>
        </div>
        <button type="button" onClick={addContact} className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}
