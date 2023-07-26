import React from "react";  // 1. importar el hook useContext
// 2. importar Context desde appContext


export const BtnCallActions = () => {
    // 3. desestruturar [store, actions] utilizando useContext()
    const text = "Ofertas"

    return (
        <button type="button" class="btn btn-warning" onClick={() => {}}>{text}</button>
    )
}