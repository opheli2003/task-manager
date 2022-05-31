import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./write.css";
const Write = () => {
	const [description, setDescription] = useState("");
	const [startingHour, setStartingHour] = useState("");
	const [endingHour, setEndingHour] = useState("");

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const newTask = {
			description,
			startingHour,
			endingHour,
		};
		try {
			await axios.post("http://localhost:5000/api/task/create", newTask);
			window.location.replace("/");
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<>
			<Navbar />
			<div className="write">
				<form onSubmit={handleSubmit} className="writeForm">
					<div className="writeFormGroup">
						<input
							type="text"
							placeholder="description"
							autoFocus="autofocus"
							onChange={(evt) => setDescription(evt.target.value)}
						/>
					</div>
					<input
						type="number"
						onChange={(evt) => setStartingHour(evt.target.value)}
					/>
					<input
						type="number"
						onChange={(evt) => setEndingHour(evt.target.value)}
					/>
					<button type="submit" className="writeSubmit">
						Add your task
					</button>
				</form>
			</div>
		</>
	);
};

export default Write;
