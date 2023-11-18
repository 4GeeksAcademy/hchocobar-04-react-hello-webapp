import React from "react";


export const BtnCallAction = () => {
  // JS
  const handleOnClick = () => {
    console.log("presione onclick");
  }

  return (
    <div className="m-2">
      <button type="button" onClick={handleOnClick} className="btn btn-lg btn-warning">
        Custom button
      </button>
    </div>
  )
}
