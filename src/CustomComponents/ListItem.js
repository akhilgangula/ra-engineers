import React from 'react'
import CreateBill from './../Content/Billing/create'
class ListItem extends React.Component {
    state = {
        icon_state : "nav-icon "
    }
    constructor(props) {
        super(props)
        this.handleExpand = this.handleExpand.bind(this)
        this.navigate = this.navigate.bind(this)
    }

    handleExpand = (event) => {
        console.log(event.target)
        event.preventDefault()
    }

    componentDidMount() {
         this.setState({ icon_state: this.state.icon_state + this.props.iconStyle })
        
    }

    navigate=(event)=>{
        if(event.target.getAttribute('navigate')!=null) {
            console.log(event.target.getAttribute('navigate'))
            
        }
    }


    render =() => {
        return (
            
            <li className={(this.props.isTreeView==='true') ? "nav-item has-treeview " : "nav-item"} >
            
                <a navigate={this.props.hyperlink} onClick={this.navigate} className={this.props.styleClass} >
                    <i className={this.state.icon_state} ></i>
                    <p>{this.props.name }<i className={(this.props.isTreeView==='true') ? "fas fa-angle-left right" : "" } ></i></p>
                </a>
                {this.props.children}            
            </li>
        )
    }
}
export default ListItem