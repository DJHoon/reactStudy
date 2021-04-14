// import logo from './logo.svg';
import './App.css';
// // import AxiosTest from './components/axiosTest'
// import Search from "./components/search";
import RouterTest from "./components/RouterTest";
import {BrowserRouter as Router, Route} from "react-router-dom";
function App() {
    const Home = () => (
        <div>
            <h2>Home</h2>
        </div>
    )
    const About = () => (
        <div>
            <h2>About</h2>
        </div>
    );
  return (
    <div className="App">
        <RouterTest />
        {/*<Search/>*/}
      {/*<AxiosTest></AxiosTest>*/}
        <Router>
            <Route path="/home" component={Home} />
        </Router>
        <Router>
            <Route path="/about" component={About} />
        </Router>
    </div>
  );
}

export default App;
