import React, { useState } from "react";
import "./header.css";

function Header() {
	const [text, setText] = useState("");
	const onFormSubmit = (e) => {
		e.preventDefault();
	};
	const onInputChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div className="d-flex flex-column mx-auto w-50">
			<h1>To Do List</h1>
			<form onSubmit={onFormSubmit}>
				<input
					type="text"
					placeholder="Enter your to do..."
					onChange={onInputChange}
				/>
			</form>
		</div>
	);
}

export default Header;
