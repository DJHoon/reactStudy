import { Component } from 'react'
import { Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './index.css'
export default class RouterTest extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <NavLink activeClassName="activeClassName" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeClassName" to="/about">about</NavLink>
                    </li>
                </ul>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        )
    }
}
