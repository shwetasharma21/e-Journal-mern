import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-static-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					e-Journal
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarSupportedContent"
				>
					<Link to="/auth?action=LOGIN" className="btn btn-light" type="submit">
						Log in
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
