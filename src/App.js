import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";

function App() {
	return (
		<>
			<Header />
			<Home />
			<Slider />
			<Categories />
		</>
	);
}

export default App;
