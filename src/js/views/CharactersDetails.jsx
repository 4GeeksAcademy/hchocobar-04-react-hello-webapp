import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";

import { Spinner } from "../component/Spinner.jsx"


export const CharacterDetails = () => {
  const { store, actions } = useContext(Context)
  const params = useParams();

  useEffect(  () => {
    actions.getCharactersDetails(params.idCharacter)
  }, [])



  return (
    <div className="container">
      <h1>{'Characters Details'}</h1>
      <h3>{params.idCharacter}</h3>
      <div class="card mb-3  bg-dark text-light">
        {!store.currentCharacters.properties ? 
          <Spinner/>
        : 
          <div class="row g-0">
            <div class="col-md-7 col-lg-6 col-xl-5">
              <img class="img-fluid rounded-start" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
            </div>
            <div class="col-md-5 col-lg-6 col-xl-7">
              <div class="card-body">
                <h1>{store.currentCharacters.properties.name}</h1>
                <p> </p>
                <p><strong>Height: </strong>{store.currentCharacters.properties.height}</p>
                <p><strong>Mass: </strong>**</p>
                <p><strong>Hair color: </strong>**</p>
                <p><strong>Skin color: </strong>*</p>
                <p><strong>Eye color: </strong>*</p>
                <p><strong>Birth year: </strong>**</p>
                <p><strong>Gender: </strong>**</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}