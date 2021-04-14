import { Component } from 'react'
import ListItem from '../ListItem'
export default class List extends Component {
    render() {
        return (
            <div>
                { this.props.List.map(item => {
                    return (
                        <ListItem  item={item} key={item}/>
                    )
                  })
                }
            </div>
        )
    }
}
