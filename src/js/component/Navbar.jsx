import React, { useContext } from "react";  // 1. importar el hook 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";  // 2. Importar el Context
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context) // 3. desestructurar store y actions



	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
			<div class="container-fluid d-flex justify-content-between mx-md-4 mt-3 mb-1">
				<div>
					<Link to="/" className="navbar-brand mb-0">
						<span>{store.cohorte}</span>
					</Link>
				</div>
				<div>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Link</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" aria-disabled="true">Disabled</a>
							</li>
							<li class="nav-item">
								<BtnFavorites />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
