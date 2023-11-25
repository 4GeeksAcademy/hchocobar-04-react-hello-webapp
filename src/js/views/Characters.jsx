import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const Characters = () => {
  const { store, actions } = useContext(Context)


  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2 row-cols-sm-2 row-cols-lg-4 row-cols-xxl-6">
      <div className="container">
        <h1>Characters</h1>
        {store.characters.map((item, index) => {
          const urlImg = 'https://starwars-visualguide.com/assets/img/characters/'
          const handleError = (event) => {
            event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
          }
          return (
            <div className="card border-dark my-3 mx-2 text-bg-dark">
              <img alt="" src={`${urlImg}${item.uid}.jpg`} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link className="btn btn-secondary" to={`/characters/${item.uid}`}>Details</Link>
                  <span onClick={() => actions.addFavorites({name: item.name, id: item.uid, type: "characater"})} className="btn btn-outline-warning">
                    <i className="far fa-heart fa-lg"></i>
                  </span>
                </div>
              </div>
            </div>


          )
        }

        )

        }

      </div>
    </div>
  )
}
