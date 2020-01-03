import React from 'react'
import { Table, Container, Jumbotron, Row, Card, InputGroup, FormControl, Col } from 'react-bootstrap'
import axios from './../../lib/connection'
import DetailedView from './DetailedView'
class View extends React.Component {

    state = {
        show: false,
        headers: ['Request ID', 'Price/Unit', 'Product', 'Sub Category', 'Quantity', 'Customer ID', 'Sub-total', 'Status'],
        data: [],
    }
    componentDidMount() {
        axios.get('/order/view').then(result => {
            this.setState({ data: result.data }, () => console.log(this.state.data)
            );
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <Container>

                <Jumbotron fluid>
                    <Container style={{ paddingLeft: 15 }}>
                        <h1>All Orders</h1>
                        <p>Here the cumulative collection of orders in the system.</p>
                    </Container>
                </Jumbotron>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col md={{ span: 3, offset: 9 }}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon2"><i className="fas fa-search"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder="Search" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive style={{ textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <PopulateHeaders headers={this.state.headers} />
                                </tr>
                            </thead>
                            <tbody >
                                <PopuldateBody data={this.state.data} />
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

}

const PopulateHeaders = (obj) => obj.headers.map((header, index) => <th key={index}>{header}</th>)

const PopuldateBody = (obj) =>
    obj.data.map((entry, index) => <DetailedView key={index} data={entry} />)
export default View