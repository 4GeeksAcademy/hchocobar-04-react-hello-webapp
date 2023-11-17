import React, { useContext } from "react";  // 1. importar el hook 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";  // 2. Importar el Context

export const Navbar = () => {
	const { store, actions } = useContext(Context) // 3. desestructurar store y actions

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-primary me-3">Contact</button>
				</Link>
				<Link to="/add-contact">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
