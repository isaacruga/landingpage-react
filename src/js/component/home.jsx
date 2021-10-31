import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
