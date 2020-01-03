import React from 'react'
import { Link } from 'react-router-dom'

class ListItem extends React.Component {
    state = {
        icon_state : "nav-icon "
    }
    constructor(props) {
        super(props)
        this.handleExpand = this.handleExpand.bind(this)
    }

    handleExpand = (event) => {
        console.log(event.target)
        event.preventDefault()
    }

    componentDidMount() {
         this.setState({ icon_state: this.state.icon_state + this.props.iconStyle })
    }

    render =() => {
        return (
            <li className={(this.props.isTreeView==='true') ? "nav-item has-treeview " : "nav-item"} >
                <Link to={this.props.hyperlink} onClick={this.navigate} className={this.props.styleClass} >
                    <i className={this.state.icon_state} ></i>
                    <p>{this.props.name }<i className={(this.props.isTreeView==='true') ? "fas fa-angle-left right" : "" } ></i></p>
                </Link>
                {this.props.children}
            </li>
        )
    }
}
export default ListItem