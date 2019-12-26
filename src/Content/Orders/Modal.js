import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { ListGroup, ListGroupItem, Row, Col, Container, Badge } from "react-bootstrap";
import { GetVariant } from "../../lib/Styling";
import * as Constants from '../../lib/Constants'
const ommit = ['status', 'id']

const PopulateRequest = (obj) =>
    <Card>
        <Card.Body>
            <Card.Title>Note:</Card.Title>
            <Card.Text>
                <br />
                You are about to make an action which will Route order/Cancel Request,
                please verify the details below and proceed accordingly.
                </Card.Text>
        </Card.Body>
        <ListGroup>
            <ListGroupItem><b>Overview</b></ListGroupItem>
            <ListGroupItem><Row>
                <Col sm={3}>
                    {"STATUS"}</Col><Col><Badge variant={GetVariant(obj.data["status"])}>{obj.data["status"].toString().toUpperCase()}</Badge>
                </Col>
            </Row>
            </ListGroupItem>
            <PopulateData data={obj.data} />
        </ListGroup>
        <Card.Body>
            <Button variant={Constants.LINK}>Reject Price</Button>
            <Button variant={Constants.LINK}>Place Order</Button>
        </Card.Body>
    </Card>

const PopulateData = (obj) =>
    Object.keys(obj.data).filter(entry => !ommit.includes(entry)).map((entry, index) =>
        <ListGroupItem key={index} >
            <Row>
                <Col sm={3}>
                    {entry.toUpperCase()}
                </Col>
                <Col>
                    {(obj.data[entry]).toString().toUpperCase()}
                </Col>
            </Row>
        </ListGroupItem>)

class ModalDialog extends React.Component {

    state = {
        show: false,
    }

    handleSubmit = () => {
        //Handle the sumbission here
        this.close();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.show !== prevState.show) {
            return ({ show: nextProps.show })
        }
        return null;
    }

    close = () => {
        this.props.changeState(false);
        this.setState({ show: false })
    }
    render = () => {
        return (
            <Modal
                show={this.state.show}
                onHide={() => this.close()}
                dialogClassName="modal-90w"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Attention Required
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PopulateRequest data={this.props.data} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={this.close} >Print</Button>
                    <Button variant="secondary" onClick={this.close} >Close</Button>
                </Modal.Footer>
            </Modal>

        );
    }
}

export default ModalDialog