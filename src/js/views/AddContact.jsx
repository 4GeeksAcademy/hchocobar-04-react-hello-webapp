import React, { useContext } from "react";
import { Context } from '../store/appContext.js'

export const AddContact = () => {
  const { store, actions } = useContext(Context)
  console.log(store.isLogin)

  return (
    <div className="container">
      <h1 className="text-center">Add Contact</h1>
    </div>
  )
}