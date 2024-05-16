import React, {useContext} from "react";  // 1. hook
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
					<button className="btn btn-primary ms-1">Contacts</button>
				</Link>
			</div>
		</nav>
	);
};
