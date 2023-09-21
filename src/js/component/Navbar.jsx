import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Spain 46</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-primary me-2">Contact</button>
				</Link>
				<Link to="/add-contact">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
