import { MDBNotification } from "mdbreact";
import React from 'react'
class Notification extends React.Component {
    render() {
        return (
        
            <MDBNotification
                show
                fade
                autohide={2500}
                iconClassName="text-primary"
                title={this.props.title}
                message={this.props.message}
            />
        );
    }
}

export default Notification