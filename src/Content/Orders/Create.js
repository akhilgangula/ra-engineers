import React from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from './Modal'
import { Badge } from 'react-bootstrap'



class PopulateData extends React.Component {

    state = {
        data: this.props.obj,
    }

    render = () => {

        return this.state.data.map(item =>
            <tr key={item.id} className="text-center">
                <td>{item.id}</td>
                <td><button className='model-trigger' onClick={() => this.handleModal(item.id)}>{item.requestId}</button></td>
                <td><Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Type</th>
                            <th>Qunatity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PopulateProduct data={item.request} />
                    </tbody>
                </Table></td>
                <td >{this.styleStatus(item.status)}</td>
            </tr>
        )
    }

    styleStatus = (status) => <Badge style={{fontSize:'medium'}} variant = {this.getVariant(status)}>{status}</Badge>

    getVariant = (status) => {
        switch (status.toUpperCase()) {
            case "REQUEST REJECTED":
                return "danger"
            case "PRICED":
                return "success"
            case "REQUESTED":
                return "warning"
            case "ORDERD":
                return "warning"
            case "ORDER REJECED":
                return "danger"
            case "ACKNOWLEGDED":
                return "dark"
            case "IN PROGRESS":
                return "light"
            case "SHIPPED":
                return "info"
            case "FULL FILLED":
                return "success"
            default:
                return "primary";
        }
    }

    handleModal = (value) => {
        console.log(value);

        this.props.onModalOpen(true)
        this.props.setData(this.props.obj[value - 1])
    }
}

const PopulateProduct = (obj) => {

    return obj.data.map((entry, index) => <tr key={index}>
        <td>{entry.product}</td>
        <td>{entry.type}</td>
        <td>{entry.qty}</td>
        <td>{entry.price}</td>
        <td>{entry.qty * entry.price}</td>
    </tr>
    )
}

class Create extends React.Component {
    state = {
        data: [
            {
                id: 1,
                requestId: 'request-123',
                request: [
                    {
                        product: 'Gypsum',
                        type: 'LUMPS',
                        qty: 100,
                        price: 2.73
                    },
                    {
                        product: 'Magnesite',
                        type: 'POWDER',
                        qty: 70,
                        price: 5.15
                    }
                ],
                status: 'Priced'
            },
            {
                id: 2,
                requestId: 'request-456',
                request: [
                    {
                        product: 'Gypsum',
                        type: 'POWDER',
                        qty: 100,
                        price: 0
                    },

                ],
                status: 'Quote Rejected'
            }
        ],
        selectedRow: null
    }

    render() {
        return (
            <Container>
                <Modal show={this.state.show} data={this.state.selectedRow} changeState={(value) => this.setState({ show: value })} />
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Products</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PopulateData obj={this.state.data} setData={(data) => this.setState({ selectedRow: data })} onModalOpen={(value) => this.setState({ show: value })} />
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Create