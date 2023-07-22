import React from "react";
import { useParams } from "react-router-dom";


export const UserDetalle = () => {
    const params = useParams();
    console.log(params, params.userId)
    const id = params.userId - 1;
    const userView = JSON.parse(localStorage.getItem('usersLocal'))
 
    return (
        <div className="card">
            <div className="card my-1 mx-4">
                <h5>User #: {id + 1}</h5>
                <h1 className="card-text">{userView[id].name}</h1>
                <p className="card-text">Company: {userView[id].company.name}</p>
                <p className="card-text">Mail: {userView[id].email}</p>
                <p className="card-text">Website: {userView[id].website}</p>
                <p className="card-text">phone: {userView[id].phone}</p>
                <p className="card-text">{userView[id].username}</p>
                <p className="card-text">{userView[id].address.city}, zipe code: {userView[id].address.zipcode}</p>
                <p className="card-text">{userView[id].name}</p>
                <p className="card-text">{userView[id].name}</p>
            </div>
        </div>
    )
}