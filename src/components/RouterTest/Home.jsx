import {Component} from 'react'
import qs from 'querystring'
import { Route, Link, NavLink } from "react-router-dom";
import Test1 from "./Test1.jsx"
import Test2 from "./Test2.jsx"
export default class Home extends Component {
    clickHome = (params) => {
        if(params == 1) {
            this.props.history.push({
                pathname: '/home/test1',
                state: {
                    id : 1,
                    test1: true
                }
            })
        } else {
            // this.props.history.replace('/home/test2')
        }
    }
    render() {
        // const { search } = this.props.location
        // console.log(this.props, 'props', qs.parse(search.slice(1)))
        return (
            <div>
                <div onClick={() => this.clickHome(1)}>Test1</div>
                <div onClick={() => this.clickHome(2)}>Test2</div>
                {/*<Link to='/home/test'>tEST</Link>*/}
                <Route path="/home/test1" component={Test1} />
                <Route path="/home/test2" component={Test2} />
            </div>
        )
    }
}
