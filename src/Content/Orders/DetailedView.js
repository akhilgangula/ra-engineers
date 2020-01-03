import React from 'react'
import { Button, Modal, Container, Form, Col, Spinner, InputGroup } from 'react-bootstrap';
import { GetBadge } from './../../lib/Styling'
import { CamelCaseToUpper } from './../../lib/Utils'
import { Table } from 'react-bootstrap';
import * as Constant from './../../lib/Constants'
import { Multiply } from './../../lib/Utils'
import axios from './../../lib/connection'

function MyVerticallyCenteredModal(props) {
    const [status, setStatus] = React.useState(props.data.status)
    const ack = (requestId, action) => {

        const data = {
            requestId: requestId,
            action: action ? "ORDER ACKNOWLEGDED" : "ORDER REJECTED"
        }
        axios.post('./order/view', data).catch(err => console.log(err))

    }

    const updateStatus = () => {
        document.getElementById('btn-text').style.display='none';
        document.getElementById('spinner').style.display='block';
    }
    const changeState = (event) => {
        console.log(event.target.value);

        if (event.target.value !== status) {
            setStatus(event.target.value);
            document.getElementById('save-btn').style.display = 'block';
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detailed View
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.data['requestId'].toUpperCase()}</h4>
                <Container>
                    <Table>
                        <tbody>
                            <PopulateData data={props.data} />
                            <tr>
                                <td>
                                    STATUS
                                </td>
                                <td>
                                    <Col sm={6}>
                                        <InputGroup className="mb-3">
                                            <Form.Control as="select" onChange={changeState} value={status}>
                                                {[Constant.IN_PROGRESS, Constant.SHIPPED, Constant.FULL_FILLED, Constant.PENDING, Constant.ORDER_ACKNOWLEGDED]
                                                    .map(ele => <option>{ele}</option>)}
                                            </Form.Control>
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" style={{ display: 'none' }} onClick={updateStatus} id='save-btn'>
                                                    <span id='btn-text'>Save</span>
                                                    <Spinner style={{ display: 'none' }} id='spinner' animation="grow" size="sm" />
                                                </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-" + Constant.DANGER} onClick={() => { ack(props.data.requestId, false); props.data.status = Constant.ORDER_REJECTED; props.onHide() }}>Reject</Button>
                <Button variant={"outline-" + Constant.SUCCESS} onClick={() => { ack(props.data.requestId, true); props.data.status = Constant.ORDER_ACKNOWLEGDED; props.onHide() }}>Ack</Button>
                <Button variant={"outline-" + Constant.DARK} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );


}

const PopulateData = (obj) => Object.keys(obj.data).filter(entry => entry !== 'status').map((item, index) => <tr key={index}><td>{CamelCaseToUpper(item)}</td><td>{obj.data[item].toString().toUpperCase()}</td></tr>)

function App({ data }) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <tr onClick={() => setModalShow(true)}>
                <PopulateRows rowData={data} />
                <td>{Multiply(data.price, data.qty)}</td>
                <td><GetBadge status={data['status'].toString()} /></td>
            </tr>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
            />
        </>
    );
}
const displayableRow = ['requestId', 'custId', 'name', 'type', 'price', 'qty']
const PopulateRows = ({ rowData }) => Object.keys(rowData).filter(item => displayableRow.includes(item)).map((item, index) => <td key={index}>{rowData[item]}</td>)


export default App