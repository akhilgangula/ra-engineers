import React from 'react'
import { Container, Accordion, Card, Tab, Tabs, ListGroup, Row, Col, Form, Button } from 'react-bootstrap'

class Price extends React.Component {


    state = {
        data: [
            {
                id: 1,
                productId: 1,
                product: "GYPSUM",
                type: "LUMPS",
                requestID: "request-123",
                qty: 33,
                size: "MEDIUM",
                port: "NAVI MUMBAI",
                customerId: "CUST-456",
                comments: "This is a dummy entry for comments section",
                status: "REQUESTED"
            },
            {
                id: 2,
                productId: 2,
                product: "MAGNESITE",
                type: "POWDER",
                requestID: "request-098",
                qty: 50,
                size: "NA",
                port: "KAKINADA",
                customerId: "CUST-890",
                comments: null,
                status: "QUOTED"
            },
        ]
    }

    render() {
        return (
            <div>
                <Container>
                    {this.state.data.map((item, index) => <PopulateData key={index} data={item} />)}
                </Container>
            </div>
        )
    }
}

class PopulateData extends React.Component {
    render() {
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Row>
                            <Col sm={2}>
                                {this.props.data.requestID.toUpperCase()}  
                            </Col>
                            <Col sm={1}>
                                <i className="fas fa-chevron-circle-left"></i>  
                            </Col>
                            <Col>
                                {this.props.data.customerId.toUpperCase()}
                            </Col>
                            <Col md={{ span: 2, offset: 2 }}>
                                {this.props.data.status.toUpperCase()}
                            </Col>
                        </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <GetCard header="Product tile" details={this.constructProductData(this.props.data)} />
                                <GetCard header="Requirement tile" details={this.constructRequestData(this.props.data)} />
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Admin tile</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Overview</Card.Subtitle>
                                        <ListGroup>
                                            <ListGroup.Item>
                                                Price : <Form.Control type="number" placeholder="Price request here" />
                                            </ListGroup.Item>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Accept/Reject</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Accept</option>
                                                    <option>Reject</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <ListGroup.Item>
                                                Comments :  <Form.Control as="textarea" rows="1" />
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="outline-success">Save</Button>
                                    </Card.Footer>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }

    constructProductData = (data) => {
        return [
            { "Product Name": data.product },
            { "Product Type": data.type }
        ]
    }

    constructRequestData = (data) => {
        return [
            { "Request ID": data.requestID },
            { "Quantity": data.qty },
            { "Size": data.size },
            { "Port": data.port },
            { "Comments": data.comments },
        ]
    }
}

class GetCard extends React.Component {
    render() {
        return (
            <Col sm={4}>
                {
                    console.log(this.props.details)

                }
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <Card.Title>{this.props.header}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Overview</Card.Subtitle>
                        <ListGroup>
                            {this.props.details.map((entry, index) =>
                                <ListGroup.Item key={index}>
                                    <b>{Object.keys(entry) + ": "}</b>
                                    {entry[Object.keys(entry)]}
                                </ListGroup.Item>)}
                        </ListGroup>
                    </Card.Body>
                </Card></Col>
        )
    }
}

export default Price