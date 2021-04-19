
import './App.css';
import RouterTest from "./components/RouterTest";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ReduxTest from "./components/ReduxTest/index";
function App() {

  return (
    <div className="App">
        <RouterTest />
        <ReduxTest />
    </div>
  );
}

export default App;
