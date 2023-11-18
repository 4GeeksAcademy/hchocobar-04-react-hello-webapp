import React from "react";


export const Spinner = (props) => {
  return (
    <div className={`spinner-border text-${props.style}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

Spinner.defaultProps = {
  style: 'info',
}