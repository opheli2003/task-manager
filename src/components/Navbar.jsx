import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<>
			<div className="top">
				<div className="topLeft" style={{ color: "#2b2b2b" }}>
					Tasks App
				</div>
				<div className="topCenter">
					<Link to="/" style={{ textDecoration: "none", color: "#2b2b2b" }}>
						Home
					</Link>
				</div>
				<div className="topRight">
					<Link
						to="/write"
						style={{ textDecoration: "none", color: "#2b2b2b" }}
					>
						{" "}
						Write
					</Link>
					<Link
						to="/register"
						style={{ textDecoration: "none", color: "#2b2b2b" }}
					>
						{" "}
						Register
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
