import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";


export const Planets = () => {
  const { store, actions } = useContext(Context)

  const imgError = (event) => {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
  }

  const handlePlanet = (url) => {
    actions.settingPlanetURL(url)
  }

  return (
    <div>
      <h1>Planetas</h1>
      {!store.planets ? <Spinner /> :
        <div className="container">
          <div className="row">
            <div className="col-row-6 col-row-sm-5 col-row-md-4 col-row-lg-3 col-row-xl-2 col-row-xxl-1">
              {store.planets.map((item) =>
                <div key={item.uid} className="card">
                  {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    onError={imgError} className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.url}</p>
                    <Link to="/detail-planets" className="btn btn-primary"
                      onClick={() => handlePlanet(item.url)}>
                      Detalles
                    </Link>
                    <span className="btn btn-outline-warning text-warning ms-2"
                      onClick={() => actions.addFavorites(item.name)}>
                      <i className="fas fa-heart"></i>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }


    </div>
  )
}