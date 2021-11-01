import React from "react";

const Jumbotron = () => {
	return (
		<div class=" my-4 rounded-3 mx-5 bg-light">
			<div class="container-fluid py-5 bg-light rounded-3 mt-5">
				<h1 class="display-5 fw-bold">Custom jumbotron</h1>
				<p class="col-md-8 fs-4 text-$gray-500">
					Using a series of utilities, you can create this jumbotron,
					just like the one in previous versions of Bootstrap. Check
					out the examples below for how you can remix and restyle it
					to your liking.
				</p>
				<button class="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
