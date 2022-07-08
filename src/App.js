import "./assets/css/app.css";
import Header from "./parts/Header";
import Home from "./parts/Home";
import About from "./parts/About";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
		</div>
	);
}

export default App;
