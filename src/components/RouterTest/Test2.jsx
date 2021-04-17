import {Component} from 'react'

export default class Test2 extends Component {
    render() {
        console.log(this.props, 'this.props-test2')
        return (
            <div>
                我是Test2
            </div>
        )
    }
}
