import React from "react";
import { theTasks } from "../data";
import Task from "./Task";

const Tasks = () => {
	return (
		<div>
			{theTasks.map((oneTask) => (
                <Task oneTask={oneTask} key={oneTask.id} />
            ))}
            Sort tasks:
            <select>
                <option selected>beginning hour</option>
                <option>ending hour</option>
                <option>description</option>
                
            </select>
		</div>
	);
};

export default Tasks;
