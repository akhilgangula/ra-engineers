import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Model.css'
class ModalPage extends Component {
    state = {
        modal14: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    populateData = () => {
        return this.props.data.filter(item => item.qty > 0).map(items =>
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.alt}</td>
                <td>{items.qty + " tons"}</td>
            </tr>
        )
    }

    render() {
        return (
            <MDBContainer>
                <a className="btn btn-app" onClick={this.toggle(14)}>
                                                <i className="fas fa-paper-plane"></i>Request for Quote
                                            </a>
                <MDBModal className="overflow" isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>Summary of your Request</MDBModalHeader>
                    <MDBModalBody>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.populateData()}
                                </tbody>
                            </table>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(14)}>Cancel</MDBBtn>
                        <MDBBtn color="primary">Request for Quote</MDBBtn>
                    </MDBModalFooter>

                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;