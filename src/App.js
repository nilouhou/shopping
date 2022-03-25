import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import CheckOut from "./pages/CheckOut/CheckOut";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<SignUp />} />
					<Route path="/checkout" element={<CheckOut />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
