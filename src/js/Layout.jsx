import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// Setting Context
import injectContext from "./store/appContext.js";
// Importar Vistas
import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
// Importamos componentes
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { UsersJPH } from "./views/UsersJPH.jsx";
import { DetailUsersJPH } from "./views/DetailUsersJPH.jsx";
import { Alert } from "./component/Alert.jsx";
import { Planets } from "./views/Planets.jsx";
import { DetailPlanets } from "./views/DetailPlanets.jsx";
import { Contacts } from "./views/Contacts.jsx";
import { AddContact } from "./views/AddContact.jsx";


// Create your first component
const Layout = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Alert/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/users" element={<UsersJPH />} />
						<Route path="/user-details/:userId" element={<DetailUsersJPH />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/detail-planets" element={<DetailPlanets />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/add-contact" element={<AddContact />} />

						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
