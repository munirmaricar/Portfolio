import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleExperience from './components/SingleExperience';
import Experience from './components/Experience';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SingleExperience} path="/experience/:slug" />
				<Route component={Experience} path="/experience" />
				<Route component={Project} path="/projects" />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
