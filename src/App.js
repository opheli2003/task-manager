import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task from "./components/Task";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/write" element={<Write />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
