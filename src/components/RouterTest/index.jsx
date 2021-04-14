import { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class RouterTest extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Router>
                            <Link to="/home">Home</Link>
                        </Router>
                    </li>
                    <li>
                        <Router>
                            <Link to="/about">about</Link>
                        </Router>
                    </li>
                </ul>

            </div>
        )
    }
}
