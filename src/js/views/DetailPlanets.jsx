import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";


export const DetailPlanets = () => {
  const {store, actions } = useContext(Context)

  useEffect(() => {
    actions.getCurrentPlanet()
  }, [])

  return (
    <div className="cont">
      {!store.currentPlanet ? <Spinner/> : 
      <div>
        <h1>{store.currentPlanet.properties.name}</h1>
        <p>Diametro: {store.currentPlanet.properties.diameter}</p>

      </div>
      }

    </div>
  )
}