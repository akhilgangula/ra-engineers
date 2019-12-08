import React from 'react'
import ListItem from './ListItem'
class List extends React.Component {
    
    render =() => {
        return (
                <ul className="nav nav-treeview open" >
                    {this.props.children}
                </ul>
        )
    }
}
export default List