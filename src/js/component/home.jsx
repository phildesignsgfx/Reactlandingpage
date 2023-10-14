import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import SmallCards from "./smallcards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return ( 
	<div>
	<Navbar />
	<Jumbotron/>
	<SmallCards/>
	</div>
	
	);
};

export default Home;
