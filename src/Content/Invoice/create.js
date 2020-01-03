import React from 'react'
import { Container, Button, Form, Col, Row, InputGroup, Card } from 'react-bootstrap'
import { GenerateID, NumberConvertor } from './../../lib/Utils'
import Invoice from "./Invoice";
import ReactToPrint from 'react-to-print';


class Create extends React.Component {

    state = {
        requestId: "REQUEST-123",
        clientId: "CUST-3563456",
        getNow: false, //turn this off
        generatePage: false,
        printButton: null,
        invoiceId: "INV-" + GenerateID(),
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

        },
        
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form.Label column sm="2">
                        INVOICE ID:</Form.Label>
                    <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue={this.state.invoiceId} />
                    </Col>
                    <Form.Label column sm="2">
                        Request ID:</Form.Label>
                    <Col sm="4">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">REQUEST-</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Start typing request ID" onChange={this.validateReqId} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <PopulateData description={this.state.clientId} header="Client Card" data={this.compileData(this.state.getNow, this.state.requestId, "Client")} />
                    </Col>
                    <Col sm={4}>
                        <PopulateData description={this.state.requestId} header="Request Card" data={this.compileData(this.state.getNow, this.state.requestId, "Request")} />
                    </Col>
                    <Col sm={4}>
                        <PopulateData description={this.state.requestId} header="Price Card" data={this.compileData(this.state.getNow, this.state.requestId, "Price")} />
                        <Button variant="outline-success" onClick={() => this.generatePage()}>Generate</Button>
                    </Col>
                </Row>
                <Row>
                    <Invoice ref={el => (this.componentRef = el)} show={this.state.generatePage} data={this.state.data} invoiceId={this.state.invoiceId} />
                    </Row>
                    <Row>
                        <Col md={{ span: 2, offset: 10 }}>
                    <ReactToPrint
                        trigger={() => <a href="#" style={{textAlign:'center'}}>{this.state.printButton}</a>}
                        content={() => this.componentRef}
                    />
                    </Col>
                    
                </Row>
            </Container>
        )
    }

    generatePage() {
        this.setState({ generatePage: true })
        this.setState({printButton: "Print/Save as PDF Invoice"})
    }
    
    compileData = (compute, requestId, collection) => {
        if (!compute) {
            return ""
        }
        switch (collection) {
            case "Client":

                return {
                    Name: "Akhil",
                    email: "akhilreddy@gmail.com",
                    phone: 9502738995,
                    Firm: "RA Engineers",
                    address: "My address",
                }
            case "Request":
                return {
                    product: "GYPSUM",
                    type: "LUMPS",
                    size: "small",
                    port: "Mumbai",
                    date: 'Feb-Mar 2020'
                }
            case "Price":
                return {
                    qty: 100,
                    price: 2.73,
                    total: NumberConvertor(273000), //qty*price*1000,
                }
            default:
                break;
        }
    }


    validateReqId = (event) => {
        if (event.target.value !== "") {
            //search db with startswith


            //don't generate if entry already present
            //assuming match is found
            this.setState({ getNow: true })
            
        }
    }
}


class PopulateData extends React.Component {

    render() {


        if (this.props.data === "") {
            return (<div></div>)
        }
        return (
            <Card>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.description}</Card.Subtitle>
                    <RenderData data={this.props.data} />

                </Card.Body>
            </Card>
        )
    }
}

const RenderData = (obj) => Object.keys(obj.data).map((entry, index) =>

    <Row key={index}>
        <Col>
            {entry.toUpperCase()}
        </Col>
        <Col>
            {obj.data[entry]}
        </Col>
    </Row>

)


export default Create 