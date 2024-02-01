import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

// https://starwars-visualguide.com/assets/img/placeholder.jpg



export const Home = () => {

	const handleErrorImg = (event) => {
		event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img onError={handleErrorImg}
					src={'https://starwars-visualguide.com/assets/img/planets/1.jpg'} />
			</p>
			<Link to="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</Link>
		</div>
	);
}
