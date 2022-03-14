import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
