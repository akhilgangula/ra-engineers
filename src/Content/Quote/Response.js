import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Response.css'
import Modal from '../../CustomComponents/Modal'

class Response extends React.Component {

    state = {
        data: [
            {
                id: 1,
                requestId: 'request-123',
                customerId: 'cust-xxx',
                request: [
                    {
                        product: 'Gypsum',
                        qty: 100
                    },
                    {
                        product: 'Magnesite',
                        qty: 70
                    }
                ]

            },
            {
                id: 2,
                requestId: 'request-123',
                customerId: 'cust-xxx',
                request: [
                    {
                        product: 'Gypsum',
                        qty: 100
                    }
                ],

            },
            

        ],
        show: false,
        selectedRow : null
    }




    render() {
        return (
            <Container>
                <Modal show={this.state.show} data={this.state.selectedRow} changeState={(value)=>this.setState({show: value})}/>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>RequestID</th>
                                    <th>Customer ID</th>
                                    <th>Requested</th>
                                    <th>Response / Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PopulateData setData={(data)=> this.setState({selectedRow:data})} data={this.state.data} onModalOpen={(value) => this.setState({ show: value })} />
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}
class PopulateData extends React.Component {


    render = () => {

        return this.props.data.map(item =>
            <tr key={item.id} >
                <td>{item.id}</td>
                <td><button className='model-trigger' onClick={() => this.handleModal(item.id)}>{item.requestId}</button></td>
                <td>{item.customerId}</td>
                <td>{item.request.map((request, index) => <div key={index}>{request.qty + " tons of " + request.product}</div>)}</td>
                <td></td>
            </tr>
        )
    }

    handleModal = (value) => {
        this.props.onModalOpen(true)
        this.props.setData(this.props.data[value - 1])
    }

}

export default Response