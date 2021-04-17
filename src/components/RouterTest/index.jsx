import { Component } from 'react'
import { Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './index.css'
export default class RouterTest extends Component {
    state = {
        id: 1
    }
    render() {
        console.log(this.props, 'props')
        return (
            <div>
                {/*无参数形式*/}
                {/*<ul>*/}
                {/*    <li>*/}
                        <Link to="/home">Home</Link>
                {/*    </li>*/}
                {/*    <li>*/}
                        <Link to="/about">about</Link>
                {/*    </li>*/}
                {/*</ul>*/}
                {/*<Route path='/home' component={Home}/>*/}
                {/*<Route path='/about' component={About}/>*/}

                {/*带参数形式1*/}
                {/*<NavLink activeClassName="activeClassName" to={`/home/${this.state.id}`}>Home</NavLink>*/}
                {/*<NavLink activeClassName="activeClassName" to="/about">about</NavLink>*/}
                {/*<Route path='/home/:id' component={Home}/>*/}
                {/*<Route path='/about' component={About}/>*/}

                {/*带参数形式2*/}
                {/*<NavLink activeClassName="activeClassName" to={`/home/?id=${this.state.id}&name=djh`}>Home</NavLink>*/}
                {/*<NavLink activeClassName="activeClassName" to={{pathname:"/about", state: {id: 1, name:'about'}}}>about</NavLink>*/}
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
            </div>
        )
    }
}
