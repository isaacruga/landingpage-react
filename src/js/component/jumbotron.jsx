import React from "react";

const Jumbotron = () => {
	return (
		<div className="container-fluid bg-light p-5">
			<h1 className="display-4 d-flex justify-content-start">
				Jumbotron
			</h1>

			<p className="d-flex justify-content-start">
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn btn-primary justify-content-start"
				href="#"
				role="button">
				Learn more
			</a>
		</div>
	);
};

export default Jumbotron;
