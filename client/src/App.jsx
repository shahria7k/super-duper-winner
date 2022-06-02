import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";

/**
 * @routes
 * ! "/": home
 * ! "/signin": signin page
 * ! "/profile": profile page
 */
export default function App() {
	return (
		<>
			{" "}
			<BrowserRouter>
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
