import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


export const Favorites = () => {
  const { store, actions } = useContext(Context)


  const handleAdd = () => {
    actions.addFavorites('item 2')
  }

  const handleRemove = () => {
    actions.removeFavorites('item ')
  }

  const handleGetDetail = () => {
    actions.getCharactersDetails('5')
  }

  return (
    <div className="container">
      <h1>Favoritos</h1>

      <button className="btn" onClick={handleAdd}>Agregar</button>
      <button className="btn" onClick={handleRemove}>Remover</button>
      <button className="btn" onClick={handleGetDetail}>Detalles</button>

      </div>

  )

}