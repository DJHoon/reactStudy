import { Component } from 'react'
import axios from "axios";

export default class AxiosText extends Component {
    handleClick = () => {
        console.log(1111)
        axios.get('http://localhost:3001/api1/string').then(res => {
            console.log(res)
        })
    }
    render() {
        return(
            <div>
                <button onClick={() => this.handleClick()}>test</button>
            </div>
        )
    }
}
