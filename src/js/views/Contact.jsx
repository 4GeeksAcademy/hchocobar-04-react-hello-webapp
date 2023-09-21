// Importar Context
import React, { useContext } from "react";  // 1. Importar el Hook
import { ContactCard } from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";  // 2. Contect

export const Contact = () => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context

  return (
    <div className="container">
      <h1 className="text-primary">{store.titulo}</h1>
      <ul>
        {store.users.map((user) => <li>Name: {user.full_name} | email: {user.email}</li> )}
      </ul>
      <ContactCard />


    </div>
  )
};
