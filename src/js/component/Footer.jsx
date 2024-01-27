import React, { useContext } from "react";  // 1.
import { Context } from "../store/appContext";  // 2. 


export const Footer = () => {
	// 3. Codígo de JS
	const { store, actions } = useContext(Context)  // 3.

	return (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com" target="_blank">4Geeks Academy</a>
			{' '} to {store.cohorte}
		</p>
	</footer>
)};
