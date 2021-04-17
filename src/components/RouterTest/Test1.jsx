import {Component} from 'react'

export default class Test1 extends Component {
    render() {
        console.log(this.props, 'this.props-test1')
        return (
            <div>
                我是Test1
            </div>
        )
    }
}
