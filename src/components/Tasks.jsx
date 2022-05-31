// ce fichier c'est ce que j'affiche sur mon home

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Task from "./Task";

const Tasks = () => {
	const [task, setTask] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/task/");
				console.log(response);
				setTask(response.data);
				// Now we got our tasks, we can use it
			} catch (err) {}
		};
		getTasks();
	}, []);

	const handleDelete = async (id, e) => {
		try {
			await axios.delete(`http://localhost:5000/api/task/${id}`);
			window.location.replace("/");
		} catch (err) {
			console.log(err.response.data);
		}
	};

	return (
		<>
			<div>
				{/* je map sur mes tasks ici car c'est ici que j'ai importé mes datas
            =>ce qui va s'afficher est défini sur le component task */}
				{task.map((item) => (
					<Task task={item} key={item.id} handleDelete={handleDelete} />
				))}

				{/* Sort tasks:
			<select onChange={(evt) => setSort(evt.target.value)}>
				<option value="starting">starting hour</option>
				<option value="ending">ending hour</option>
				<option value="description">description</option>
            </select> */}
			</div>
		</>
	);
};

export default Tasks;
