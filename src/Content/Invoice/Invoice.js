import React from 'react'
import { Row, Card, Col, Container, Table } from 'react-bootstrap'
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
                            <br/>
                            <Table >
                                <tbody >
                                    <tr className='invoice-header'>
                                        <td><h1>INVOICE</h1></td>
                                        <td style={{ textAlign: 'right' }}>+091-9502738995<br />
                                            akhilreddy@gangula.com<br />
                                            mywebsite.com<br /></td>
                                        <td style={{ textAlign: 'right' }}>5-9-16, 3A, Prashanti Nagar,<br />
                                            IDA Kukatpally, Kukatpally,<br />
                                            Hyderabad, Telangana 500072<br /></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <br />
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Date: {new Date().getDate() + '/' + new Date().getMonth() + "/" + new Date().getFullYear()}</td>
                                        <td style={{ textAlign: 'right' }}>Place: Hyderabad</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <br />
                            <Row>
                                <Col style={{ textAlign: 'justify' }}>
                                    We are pleased to know that you (<b>{this.props.data.firm}</b>) have placed an order for <b>{this.props.data.product}</b> of
                                    type <b>{this.props.data.type}</b> on <b>{this.props.data.createdOn}</b>. We are happy to say that your order is placed
        successfully with us. As agreed your shippment will reach <b>{this.props.data.port}</b> on <b>{this.props.data.date}</b>
                                </Col>
                            </Row>
                            <br />
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Card.Subtitle className="mb-2 text-muted invoice-subtitles">Billed To</Card.Subtitle>
                                            <div>{this.props.data.firm}</div>
                                            <div>{this.props.data.phone}</div>
                                            <div>{this.props.data.email}</div>
                                            <div>{this.props.data.address}</div>
                                        </td>
                                        <td>
                                            <Card.Subtitle className="mb-2 text-muted invoice-subtitles">Invoice #: </Card.Subtitle>
                                            <div>{this.props.invoiceId}</div>
                                        </td>
                                        <td>
                                            <Card.Subtitle className="mb-2 text-muted">Invoice Total: </Card.Subtitle>
                                            <h2 className="invoice-color">₹{this.props.data.total}</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <br />
                            <hr className='divider' />
                            <br />
                            <Container>
                                <Table borderless>
                                    <thead className='invoice'>
                                        <tr>
                                            <th>Description</th>
                                            <th className='invoice-right'>Unit Cost</th>
                                            <th className='invoice-right'>Quantity(in tons)</th>
                                            <th className='invoice-right'>Quantity(in tons)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.props.data.product} - {this.props.data.type}
                                                <Card.Subtitle className="text-muted invoice-subtitles" style={{ paddingTop: '5px' }}>
                                                    {this.props.data.size}
                                                </Card.Subtitle></td>
                                            <td className='invoice-right'>{this.props.data.price}</td>
                                            <td className='invoice-right'>{this.props.data.qty}</td>
                                            <td className='invoice-right'>{this.props.data.total}</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className='invoice-right' style={{fontSize:'large',color:'#191962'}}><b>Total</b></td>
                                            <td className='invoice-right' style={{fontSize:'large',color:'#191962'}}><b>₹{this.props.data.total}</b></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <hr />
                                <br />
                                <Table borderless>
                                    <tbody>
                                        <tr className="invoice-header invoice-right">
                                            <td>Terms and Conditions apply</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Invoice