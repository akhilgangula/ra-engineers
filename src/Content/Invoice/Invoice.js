import React from 'react'
import { Row, Card, Col, Container } from 'react-bootstrap'
import './Invoice.css'
class Invoice extends React.Component {

    render() {
        if (!this.props.show) {
            return (<div></div>)
        }
        return (
            <Container>
                <Row>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Row>
                                <Col sm={12} style={{ textAlign: 'center' }}>
                                    <h2>RA Engineers</h2>
                                </Col>
                            </Row>
                            <Row className='invoice-header'>
                                <Col sm={5}>
                                    <h1>INVOICE</h1>
                                </Col>
                                <Col sm={3} style={{ textAlign: 'right' }}>
                                    +091-9502738995<br />
                                    akhilreddy@gangula.com<br />
                                    mywebsite.com<br />
                                </Col>
                                <Col sm={4} style={{ textAlign: 'right' }}>
                                    5-9-16, 3A, Prashanti Nagar,<br />
                                    IDA Kukatpally, Kukatpally,<br />
                                    Hyderabad, Telangana 500072<br />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={6}>Date: {new Date().getDate() + '/' + new Date().getMonth() + "/" + new Date().getFullYear()}</Col>
                                <Col md={{ span: 2, offset: 4 }}>Place: Hyderabad</Col>
                            </Row>
                            <Row>
                                <Col>Time: {new Date().getHours() + ':' + new Date().getMinutes() + ":" + new Date().getSeconds()}</Col>

                            </Row>
                            <br />
                            <Row>
                                <Col style={{ textAlign: 'justify' }}>
                                    We are pleased to know that you (<b>{this.props.data.firm}</b>) have placed an order for <b>{this.props.data.product}</b> of
                                    type <b>{this.props.data.type}</b> on <b>{this.props.data.createdOn}</b>. We are happy to say that your order is placed
        successfully with us. As agreed your shippment will reach {this.props.data.port} on {this.props.data.date}
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={3}>
                                    <Card.Subtitle className="mb-2 text-muted invoice-subtitles">Billed To</Card.Subtitle>
                                    <div>{this.props.data.firm}</div>
                                    <div>{this.props.data.phone}</div>
                                    <div>{this.props.data.email}</div>
                                    <div>{this.props.data.address}</div>
                                </Col>
                                <Col sm={4}>
                                    <Card.Subtitle className="mb-2 text-muted invoice-subtitles">Invoice #: </Card.Subtitle>
                                    <div>{this.props.invoiceId}</div>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }} style={{ textAlign: 'right' }}>
                                    <Card.Subtitle className="mb-2 text-muted">Invoice Total: </Card.Subtitle>
                                    <h2 className="invoice-color">₹{this.props.data.total}</h2>
                                </Col>
                            </Row>
                            <br />
                            <hr className='divider' />
                            <br />
                            <Container>
                                <Row className='invoice-color'>
                                    <Col sm={4}>Description</Col>
                                    <Col sm={3} className='invoice-right'>Unit Cost</Col>
                                    <Col sm={3} className='invoice-right'>Quantity(in tons)</Col>
                                    <Col sm={2} className='invoice-right'>Amount</Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        {this.props.data.product} - {this.props.data.type}
                                        <Card.Subtitle className="text-muted invoice-subtitles" style={{ paddingTop: '5px' }}>
                                            {this.props.data.size}
                                        </Card.Subtitle>
                                    </Col>
                                    <Col sm={3} className='invoice-right'>{this.props.data.price}</Col>
                                    <Col sm={3} className='invoice-right'>{this.props.data.qty}</Col>
                                    <Col sm={2} className='invoice-right'>{this.props.data.total}</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col md={{ span: 2, offset: 8 }} className='invoice-color invoice-right'>
                                        Total
                                    </Col>
                                    <Col md={{ span: 2 }} className='invoice-color invoice-right'>
                                        ₹{this.props.data.total}
                                    </Col>
                                </Row>
                                <br/>
                                <Row className='invoice-header invoice-right'>
                                    <Col>
                                        Terms and Conditions apply
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Invoice