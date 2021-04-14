import { Component } from 'react'

export default class Header extends Component {
    state = {

    }
    onKeyUp = (e) => {
        const { onKeyUp } = this.props
        if(e.keyCode == 13) {
            if(e.target.value.trim() == '') {
                alert("请输入内容")
                return
            }
            onKeyUp(e.target.value)
            return
        }

    }
    render() {
        return (
            <div>
                <label htmlFor="input">请输入</label>
                <input type="text" id="input" onKeyUp={this.onKeyUp}/>
            </div>
        )
    }
}
