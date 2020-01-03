import React from 'react'
import { Container, Accordion, Card, ListGroup, Row, Col, Form, Button } from 'react-bootstrap'
import axios from './../../lib/connection'
class Price extends React.Component {


    state = {
        data: [],
    }

    componentDidMount() {
        axios.get('/quote/price').then(result => {
            this.setState({ data: result.data })
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Container>
                    {
                        this.state.data.map((item, index) => <PopulateData key={index} data={item} />)
                    }
                </Container>
            </div>
        )
    }
}

class PopulateData extends React.Component {
    state = {
        validated: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ validated: true });
        if (!event.currentTarget.checkValidity()) {
            //if failed
            return;
        }
        const quote = {
            requestId: this.props.data.requestId,
            price: this.refs.priceRef.value,
            action: this.refs.actionRef.value,
            notes: this.refs.notesRef.value,
        }
        axios.post('quote/price', quote).catch(err => console.log(err));
        
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Row>
                            <Col sm={3}>
                                {this.props.data.requestId.toUpperCase()}
                            </Col>
                            <Col sm={1}>
                                <i className="fas fa-chevron-circle-left"></i>
                            </Col>
                            <Col>
                                {this.props.data.custId.toUpperCase()}
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
                                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                        <Card.Header>
                                            <Card.Title>Admin tile</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <ListGroup>
                                                <Form.Group>
                                                    <Form.Label>Price : </Form.Label>
                                                    <Form.Control ref={"priceRef"} step="any" type="number" required placeholder="Quote the price per unit" />
                                                    <Form.Control.Feedback type="invalid">
                                                        Invalid quotation(0 if rejecting request).
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>Accept/Reject</Form.Label>
                                                    <Form.Control ref={"actionRef"} as="select">
                                                        <option>Accept</option>
                                                        <option>Reject</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Comments : </Form.Label>
                                                    <Form.Control required ref={"notesRef"} as="textarea" rows="1" placeholder="Optional (ETA)" />
                                                </Form.Group>
                                            </ListGroup>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button type='submit' variant="outline-success">Save</Button>
                                        </Card.Footer>
                                    </Form>
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
            { "Product Name": data.name },
            { "Product Type": data.type }
        ]
    }

    constructRequestData = (data) => {
        return [
            { "Request ID": data.requestId },
            { "Quantity": data.qty },
            { "Size": data.size },
            { "Port": data.port },
            { "Comments": data.notes },
        ]
    }
}

class GetCard extends React.Component {
    render() {
        return (
            <Col sm={4}>
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