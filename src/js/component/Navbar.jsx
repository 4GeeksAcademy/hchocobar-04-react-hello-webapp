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
					<button className="btn btn-primary">Usuarios</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary ms-1">Planets</button>
				</Link>
				<Link to="/contacts">
					<button className="btn btn-primary position-relative ms-1">
						Contacts
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{store.counter}
						</span>
					</button>
				</Link>
			</div>
			<div class="dropdown">
				<button class="btn btn-success dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i className="far fa-heart"></i>
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{store.favorites.length}
						<span class="visually-hidden">unread messages</span>
					</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-end">
					{store.favorites.map((item, index) => 
						<li key={index} class="dropdown-item d-flex justify-content-between" >
							{item}
							<span className="text-danger ms-2"
							  onClick={() => actions.removeFavorites(item)}>
                <i className="fas fa-trash"></i>
              </span>

						</li>)
					}
				</ul>
			</div>
		</nav>
	);
};
