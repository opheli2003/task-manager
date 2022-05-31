import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Tasks from "./Tasks";

// ici c'est l'affichage de tasks que je peux avoir car j'ai mis en props oneTask

const Task = ({ task, handleDelete }) => {
	// c'est ici que je vais fetch my data

	return (
		
		<div>
      
			{task.description}
			{task.startingHour}
      {task.endingHour}
      <button onClick={(e)=>handleDelete(task._id)}>Delete</button>
		</div>
	);
};

export default Task;
