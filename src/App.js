import React from "react";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const CombinedComponents = () => {
	return (
		<>
			<Home />
			<Auth />
		</>
	);
};

function App() {
	return (
		<div className="d-flex flex-column vh-100">
			<BrowserRouter>
				<Navbar />

				<div className="d-flex flex-fill">
					<Routes>
						<Route exact path="/" element={<CombinedComponents />} />
						<Route exact path="/auth" element={<CombinedComponents />} />
						<Route exact path="/error" element={<ErrorPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
