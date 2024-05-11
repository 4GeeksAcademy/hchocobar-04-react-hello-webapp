import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


export const Alert = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className={ store.message ? 'text-center alert alert-warning' : 'd-none' } role="alert">
      {store.message}
    </div>
  )
}
