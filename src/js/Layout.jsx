import React from "react";
import "bootswatch/dist/slate/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero.
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Setting Context
import injectContext from "./store/appContext.js";
// Importamos componentes
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
// Importar Vistas
import { Home } from "./views/Home.jsx";
import { File404 } from "./views/File404.jsx";
import { Favorites } from "./component/Favites.jsx";
import { Characters } from "./views/Characters.jsx";
import { CharacterDetails } from "./views/CharactersDetails.jsx";
import { Contacts } from "./views/Contacts.jsx";
import { ContactDetails } from "./views/ContactDetails.jsx";
import { AddContact } from "./views/AddContact.jsx";


// Create your first component
const Layout = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="h-100 d-flex flex-column">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters/>}/>
						<Route path="/characters/:idCharacter" element={<CharacterDetails/>}/>
						<Route path="/contacts" element={<Contacts/>}/>
						<Route path="/contacts/:idContact" element={<ContactDetails/>}/>
						<Route path='/add-contact' element={<AddContact/>} />
						<Route path="/favorites" element={<Favorites/>} />
						<Route path="*" element={<File404/>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
