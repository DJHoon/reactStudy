import {Component} from 'react'
import Store from '../../redux/redux'
export default class ReduxTest extends Component {
    componentDidMount() {
        Store.subscribe(() => {
            this.setState({})
        })
    }

    addClick = () => {
        const { value } = this.selectValue
        Store.dispatch({ type: 'increment', data: value * 1})
    }
    delClick = () => {
        const { value } = this.selectValue
        Store.dispatch({ type: 'decrement', data: value * 1})
    }
    render() {
        return (
            <div>
                <div>当前数：{Store.getState()}</div>
                <select ref={c => this.selectValue = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={() => this.addClick()}>+</button>
                <button onClick={() => this.delClick()}>-</button>
            </div>
        )
    }
}
