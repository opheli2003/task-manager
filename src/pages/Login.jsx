import axios from "axios";
import { useState } from "react";

export default function Login() {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/login",{ username, password })     
      setUser(response.data)
      window.location.replace('/')
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your username..."
					onChange={(evt) => setUsername(evt.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password..."
					onChange={(evt) => setPassword(evt.target.value)}
				/>
				<button className="loginButton" type="submit">
					Login
				</button>
			</form>
			{/* <button className="loginRegisterButton"></button> */}
		</div>
	);
}
