import React, { useContext } from "react";  // 1. hook
import { Link } from "react-router-dom";
import { Context } from '../store/appContext.js'  // 2. Context

export const Navbar = () => {
	// 3. desestructurar store y actions
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.cohorte}</span>
			</Link>
			<div className="ml-auto">
				<Link to="/users">
					<button className="btn btn-primary position-relative me-3">
						Usuarios
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{store.counter}
						</span>
					</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary ms-1">Planets</button>
				</Link>
				<Link to="/contacts">
					<button className="btn btn-primary ms-1">Contacts</button>
				</Link>
			</div>
			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i className="far fa-heart"></i>
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{store.favorites.length}
					</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-end">
					{store.favorites.map((item, i) => 
						<li key={i} className="dropdown-item d-flex justify-content-between">
							{item}
							<span onClick={() => actions.removeFavorites(item)} className="ms-2">
								<i className="fas fa-trash"></i>
							</span>
						</li>
						)
					}
				</ul>
			</div>
		</nav>
	);
};
