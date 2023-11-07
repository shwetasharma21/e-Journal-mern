import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="text-center">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.status.text || error.message}</i>
			</p>
		</div>
	);
}

export default ErrorPage;
