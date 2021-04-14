import { Component } from 'react'
import itemCss from './index.module.css'
export default class Search extends Component {
    render() {
        const {item} = this.props
        return (
            <div className={itemCss.item}>
                {item}
            </div>
        )
    }
}
