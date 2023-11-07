import React, { useState } from "react";
import axios from "axios";

function Auth() {
	const [isLoginUI, setIsLoginUI] = useState(false);

	const [loginInputs, setLoginInputs] = useState({
		email: "",
		password: "",
	});
	const changeLoginInputs = (e) => {
		const { name, value } = e.target;
		setLoginInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	};

	const [registerInputs, setRegisterInputs] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const changeRegisterInputs = (e) => {
		const { name, value } = e.target;
		setRegisterInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	};

	const handleLogin = (e) => {
		e.preventDefault();
	};
	const handleRegister = async (e) => {
		try {
			const { name, email, password } = registerInputs;
			e.preventDefault();
			const result = await axios.post("http://localhost:2100/api/v1/register", {
				name,
				email,
				password,
			});
			if (!result) return alert("Unable to register");
			alert("Register Successful");
		} catch (err) {
			alert("User already exist");
		}
	};
	const registerUI = () => {
		return (
			<>
				<form className="card-body" onSubmit={handleRegister}>
					<h5 className="card-title text-center">Register</h5>
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="registerNameInput"
							placeholder="Name"
							value={registerInputs.name}
							onChange={changeRegisterInputs}
							name="name"
						/>
						<label htmlFor="registerNameInput">Name</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="registerEmailInput"
							placeholder="name@example.com"
							value={registerInputs.email}
							onChange={changeRegisterInputs}
							name="email"
						/>
						<label htmlFor="registerEmailInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control"
							id="registerPasswordInput"
							placeholder="Password"
							value={registerInputs.password}
							onChange={changeRegisterInputs}
							name="password"
						/>
						<label htmlFor="registerPasswordInput">Password</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control"
							id="registerConfirmPasswordInput"
							placeholder="Password"
							value={registerInputs.confirmPassword}
							onChange={changeRegisterInputs}
							name="confirmPassword"
						/>
						<label htmlFor="registerConfirmPasswordInput">
							Confirm Password
						</label>
					</div>
					<button
						className="d-flex mx-auto btn btn-dark mt-2"
						onClick={handleRegister}
					>
						Register
					</button>
				</form>
				<div className="d-flex mx-auto align-items-center mb-4">
					Already have an account?
					<button className="btn btn-link" onClick={() => setIsLoginUI(true)}>
						Login
					</button>
				</div>
			</>
		);
	};
	const loginUI = () => {
		return (
			<>
				<form className="card-body" onSubmit={handleLogin}>
					<h5 className="card-title text-center">Log in</h5>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="loginEmailInput"
							placeholder="name@example.com"
							value={loginInputs.email}
							onChange={changeLoginInputs}
							name="email"
						/>
						<label htmlFor="loginEmailInput">Email address</label>
					</div>
					<div className="form-floating">
						<input
							type="password"
							className="form-control"
							id="loginPasswordInput"
							placeholder="Password"
							value={loginInputs.password}
							onChange={changeLoginInputs}
							name="password"
						/>
						<label htmlFor="loginPasswordInput">Password</label>
					</div>
					<button className="d-flex btn btn-dark mt-3 mx-auto">Log in</button>
				</form>
				<div className="d-flex mx-auto align-items-center mb-4">
					Create an account{" "}
					<button className="btn btn-link" onClick={() => setIsLoginUI(false)}>
						Register
					</button>
				</div>
			</>
		);
	};
	return (
		<div className="w-50 d-flex justify-content-center align-items-center container">
			<div className="card w-75">{isLoginUI ? loginUI() : registerUI()}</div>
		</div>
	);
}

export default Auth;
