import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { Spinner } from "../component/Spinner.jsx"


export const CharacterDetails = () => {
  const { store, actions } = useContext(Context)
  const params = useParams();

  const returnCharacters = () => {
    actions.currentCharacters({});
  }

  useEffect(  () => {
    actions.getCharactersDetails(params.idCharacter)
  }, [])


  return (
    <div className="container">
      <h1 className="text-center">{'Characters Details'}</h1>
      <div className="card mb-3  bg-dark text-light">
        {!store.currentCharacters.properties ? 
          <div className="text-center">
            <Spinner/>
          </div>
        : 
          <div className="row g-0">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <img className="img-fluid rounded-start" src={`https://starwars-visualguide.com/assets/img/characters/${store.currentCharacters.uid}.jpg`} />
            </div>
            <div className="col-md-5 col-lg-6 col-xl-7">
              <div className="card-body">
                <p className="text-end">
                  <Link to='/characters' className='btn btn-warning' onClick={returnCharacters}>
                    Return
                  </Link>
                </p>
                <h1>{store.currentCharacters.properties.name}</h1>
                <p> </p>
                <p><strong>Height: </strong>{store.currentCharacters.properties.height}</p>
                <p><strong>Mass: </strong>{store.currentCharacters.properties.mass}</p>
                <p><strong>Hair color: </strong>{store.currentCharacters.properties.hair_color}</p>
                <p><strong>Skin color: </strong>{store.currentCharacters.properties.skin_color}</p>
                <p><strong>Eye color: </strong>{store.currentCharacters.properties.eye_color}</p>
                <p><strong>Birth year: </strong>{store.currentCharacters.properties.birth_year}</p>
                <p><strong>Gender: </strong>{store.currentCharacters.properties.gender}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}