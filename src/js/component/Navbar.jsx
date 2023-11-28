import React, { useContext } from "react";  // 1. importar el hook 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";  // 2. Importar el Context
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context) // 3. desestructurar store y actions



	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-3 mb-1">
				<div>
					<Link to="/" className="navbar-brand mb-0">
						<span>{store.cohorte}</span>
					</Link>
				</div>
				<div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/characters">Character</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">Link</Link>
							</li>
							{/* <li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown
								</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="#">Action</Link></li>
									<li><Link className="dropdown-item" to="#">Another action</Link></li>
									<li><hr className="dropdown-divider" /></li>
									<li><Link className="dropdown-item" to="#">Something else here</Link></li>
								</ul>
							</li */}>
							{/* <li className="nav-item">
								<Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
							</li> */}
							<li className="nav-item d-none d-md-block">
								<BtnFavorites />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
