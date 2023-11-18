import React from "react";


export const Alert = ({style='warning', children}) => {
  return (
    <div className={`alert alert-${style}`} role="alert">
      {children}
    </div>
  )
}