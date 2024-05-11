import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


export const Footer = () => {
	const { store, actions } = useContext(Context);

	return (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com" target="_blank">4Geeks Academy</a>
			<span> para la cohorte: {store.cohorte}</span>
		</p>
	</footer>
)};
