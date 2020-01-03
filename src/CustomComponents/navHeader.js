import React from 'react'
class NavHeader extends React.Component {
    
    render =() => {
        return (
                <li className={this.props.styleClass}>{this.props.name}</li>
        )
    }
}
export default NavHeader