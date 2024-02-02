import React, { useContext } from "react";  // 1. 
import { Link } from "react-router-dom";
import { Context } from '../store/appContext.js'  // 2. 
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context)  // 3.

	const handleLogout = () => {
		if (store.isLogin) {
			actions.logout()
		}
	}

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contacts">
					<button className="btn btn-primary me-3">Contacts</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-success" onClick={handleLogout}>
						{store.isLogin ? 'Loguot' : 'Login'}
					</button>
				</Link>
			</div>
			<BtnFavorites/>
		</nav>
	);
};
