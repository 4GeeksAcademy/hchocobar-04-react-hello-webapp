import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Users } from './Users.jsx';
import { UsersJPH } from "./UsersJPH.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Flux</h1>
		<UsersJPH/>

	</div>
);
