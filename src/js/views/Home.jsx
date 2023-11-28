import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import starWarsBack from "../../img/star-wars-back1.jpg";


export const Home = () => (
	<div className="container mt-5">
		{/* <h1>Hello Rigo!</h1> */}
		<p>
			<img className="img-fluid" src={starWarsBack} />
		</p>
		{/* <Link to="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</Link> */}
	</div>
);
