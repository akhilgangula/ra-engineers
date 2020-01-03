import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { ListGroup, ListGroupItem, Row, Col, Badge, Container } from "react-bootstrap";
import { GetVariant } from "../../lib/Styling";
import * as Constants from '../../lib/Constants'
import axios from './../../lib/connection'
const ommit = ['_id', 'status', 'id', "eta", 'custId', 'pid']

const PopulateRequest = ({ data, close }) =>
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
                    <b>{"STATUS"}</b></Col><Col><Badge variant={GetVariant(data["status"])}>{data["status"].toString().toUpperCase()}</Badge>
                </Col>
            </Row>
            </ListGroupItem>
            <Container>
                <Row>
                    <PopulateData data={data} />
                </Row>
            </Container>
        </ListGroup>
        <Card.Body>
            <Button variant={Constants.LINK} onClick={() => { data.status = route(data, false); close() }}>Reject Price</Button>
            <Button variant={Constants.LINK} onClick={() => { data.status = route(data, true); close() }}>Place Order</Button>
        </Card.Body>
    </Card>

const route = (data, action) => {
    const order = {
        requestId: data.requestId,
        action: action,
    }
    axios.post('/order/create', order).catch(err => console.log(err))
    return action ? 'ORDERED' : 'PRICE REJECTED';
}

const PopulateData = ({data}) =>
    Object.keys(data).filter(entry => !ommit.includes(entry)).map((entry, index) =>

        <Col key={index} sm={6}>
            <Row style={{ paddingTop: '15px' }}>
                <Col sm={4}>
                    <b>{entry.toUpperCase()}</b>
                </Col>
                <Col sm={8}>
                    {(data[entry]).toString().toUpperCase()}
                </Col>
            </Row>
        </Col>
    )

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
                size="lg"
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
                    <PopulateRequest data={this.props.data} close={this.close} />
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