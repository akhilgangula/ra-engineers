import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Modal from './Modal'
import { Badge, Jumbotron, Alert } from 'react-bootstrap'
import { GetVariant } from './../../lib/Styling'
import * as Constants from './../../lib/Constants'

const blocked_status = [
    Constants.ORDERED,
    Constants.ORDER_ACKNOWLEGDED,
    Constants.SHIPPED,
    Constants.FULL_FILLED,
    Constants.REQUEST_REJECTED,
    Constants.PRICE_REJECTED
]

class PopulateData extends React.Component {

    state = {
        data: this.props.obj,
    }

    render = () => {

        return this.state.data.map(item =>
            <tr key={item.id} className="text-center" onClick={() => this.handleModal(item.id)}>
                <td>{item.id}</td>
                <td>{item.requestId}</td>
                <td>{item.product}</td>
                <td>{item.type}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.qty * item.price}</td>
                <td >{this.styleStatus(item.status)}</td>
            </tr>
        )
    }

    styleStatus = (status) => <Badge variant={GetVariant(status)}>{status.toUpperCase()}</Badge>


    handleModal = (value) => {
        //If order is placed, do't open models
        if(blocked_status.includes(this.props.obj[value - 1].status.toString().toUpperCase())) {
            alert("Order is already placed, to manage orders, please Navigate to 'View My Orders'")
            return;
        }
        this.props.onModalOpen(true)
        this.props.setData(this.props.obj[value - 1])
    }
}

class Create extends React.Component {
    state = {
        data: [
            {
                id: 1,
                requestId: 'request-123',
                product: 'Gypsum',
                type: 'LUMPS',
                qty: 100,
                price: 2.73,
                status: 'Priced',
                size: 'small',
                port: 'self',
                comment: 'Priced',
                date: 'Feb-Mar 2020'
            },
            {
                id: 2,
                requestId: 'request-456',
                product: 'Gypsum',
                type: 'POWDER',
                qty: 100,
                price: 0,
                status: 'Request Rejected',
                port: 'mumbai',
                comment: 'Out of Stock',
                date: '12/01/2020'
            },
            {
                id: 3,
                requestId: 'request-908',
                product: 'Magnesite',
                type: 'POWDER',
                qty: 70,
                price: 5.15,
                status: 'ORDERED',
                port: 'kainada',
                comment: 'Priced',
                date: '15/03/2020'
            },
            {
                id: 3,
                requestId: 'request-908',
                product: 'Magnesite',
                type: 'POWDER',
                qty: 70,
                price: 5.15,
                status: 'PRICE REJECTED',
                port: 'kainada',
                comment: 'Priced',
                date: '15/03/2020'
            }
        ],
        selectedRow: null
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container>
                        <h1>All Requests</h1>
                        <p>All the Request of Quotations (Priced, Ordered, Rejected) will be displayed here.</p>
                    </Container>
                </Jumbotron>
                <AlertDismissibleExample />
                <Container>
                    <Modal show={this.state.show} data={this.state.selectedRow} changeState={(value) => this.setState({ show: value })} />
                    <Table striped hover bordered responsive borderless>
                        <thead style={{textAlign:'center'}}>
                            <tr>
                                <th>#</th>
                                <th>Request Id</th>
                                <th>Product</th>
                                <th>Type</th>
                                <th>Qunatity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PopulateData obj={this.state.data} setData={(data) => this.setState({ selectedRow: data })} onModalOpen={(value) => this.setState({ show: value })} />
                        </tbody>
                    </Table>

                </Container>
            </>
        )
    }
}

function AlertDismissibleExample() {
    const [show, setShow] = React.useState(true);

    if (show) {
        return (
            <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>What to do next?</Alert.Heading>
                <p>Click on any desired row to perform an action</p>
            </Alert>
        );
    }
    return null;
}

export default Create