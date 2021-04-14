import { Component } from 'react'
import Header from './Header'
import List from './List'
export default class Search extends Component {
    state = {
        List: [1, 2, 3,4]
    }
    onKeyUp = (val) => {
        console.log(val, 'vvvvvxxxxttt')
    }
    render() {
        return (
            <div>
                <Header onKeyUp={this.onKeyUp}/>
                <List List={this.state.List}/>
            </div>
        )
    }
}
