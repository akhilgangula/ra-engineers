import React from 'react'
import { Container, Tab, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Invoice from "./Invoice";
import ReactToPrint from 'react-to-print';
import { NumberConvertor } from './../../lib/Utils'
class View extends React.Component {

    state = {
        generatePage: true,
        printButton: "Print/Save as PDF Invoice",
        invoiceID: "null",
        data: {
            Name: "Akhil",
            email: "akhilreddy@gmail.com",
            phone: 9502738995,
            firm: "RA Engineers",
            address: "My address",
            product: "GYPSUM",
            type: "LUMPS",
            size: "small",
            port: "Mumbai",
            date: 'Feb-Mar 2020',
            createdOn: '26/12/2019',
            qty: 100,
            price: 2.73,
            total: NumberConvertor(273000), //qty*price*1000,
            invoiceId: 'INV-125435758525'
        },
    }
    render() {
        return (
            <Container>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#request">
                    <Row>
                        <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#invoice">Search by Invoice ID</ListGroup.Item>
                                <ListGroup.Item action href="#cust">Search by Customer ID</ListGroup.Item>
                                <ListGroup.Item action href="#request">Search by Request ID</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#invoice">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">INV-</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Start typing ID INV-XXX" />
                                    </InputGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#cust">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">CUST-</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Start typing ID CUST-XXX" />
                                    </InputGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#request">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">REQUEST-</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Start typing ID REQUEST-XXX" />
                                    </InputGroup>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <br />
                <Container>
                    <Row>
                        <Invoice ref={el => (this.componentRef = el)} show={this.state.generatePage} data={this.state.data} invoiceId={this.state.data.invoiceId} />
                    </Row>
                    <Row>
                        <Col md={{ span: 2, offset: 10 }}>
                            <ReactToPrint
                                trigger={() => <a href="#" style={{ textAlign: 'center' }}>{this.state.printButton}</a>}
                                content={() => this.componentRef}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
    generatePage() {
        this.setState({ generatePage: true })
        this.setState({ printButton: "Print/Save as PDF Invoice" })
    }
}

export default View