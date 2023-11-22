import React, { useContext } from "react";  // 1. importar el hook 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";  // 2. Importar el Context
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context) // 3. desestructurar store y actions

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
			</Link>
			<div className="ml-auto">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">

					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="#">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Features</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Pricing</Link>
						</li>
					</ul>

				</div>
			</div>
			<BtnFavorites />
		</nav>
	);
};
