import "./assets/css/app.css";
import Header from "./parts/Header";
import Home from "./parts/Home";
import About from "./parts/About";
import Resume from "./parts/Resume";
import Projects from "./parts/Projects";
import Contact from "./parts/Contact";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
			<Resume />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
