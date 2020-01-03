import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './style.css'
import Spinner from 'react-bootstrap/Spinner'
import { GenerateID } from './../../lib/Utils'

import axios from './../../lib/connection'

function Modaldialog(obj) {
    var ommit = ['src', 'id', 'alt', 'qty', 'size']
    const [validated, setValidated] = React.useState(false);
    let sizeRef, portRef, notesRef, qtyRef;
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toPascal = (str) => {
        return (str.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }))
    }
    const handleSubmit = (event) => {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('spinner-btn-text').style.display = 'none';
        event.preventDefault();
        event.stopPropagation();
        setValidated(true)
        if (!event.currentTarget.checkValidity()) {
            //if failed
            document.getElementById('loading').style.display = 'none';
            document.getElementById('spinner-btn-text').style.display = 'block';
            return;
        }
        const request = {
            requestId: "request-" + GenerateID(),
            pid: obj.data.id,
            qty: qtyRef.value,
            size: sizeRef.value,
            port: portRef.value,
            notes: notesRef.value,
            custId: "CUST-123", //TODO: remove this when redux is implemented
        }
        axios.post('quote/create',request).then(handleClose()).catch(err=>console.log(err));
    }


    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <i className="far fa-paper-plane"></i> Request for Quote
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Attention Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are about to send a request with the following details: </Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Table>
                        <tbody style={{ textAlign: 'center', alignContent: 'center' }}>
                            {Object.keys(obj.data).filter(key => !ommit.includes(key)).map((mapKey, index) => <tr key={index}><td>{toPascal(mapKey)}</td><td>{obj.data[mapKey]}</td></tr>)}
                            <tr>
                                <td>{'Quantity (in tons)'}</td>
                                <td>
                                    <Col md={{ span: 6, offset: 4 }}>
                                        <Form.Group as={Col} controlId="validationCustom01">
                                            <Form.Control ref={reference => qtyRef = reference} min="1" type="number" style={{ fontSize: "15px" }} required />
                                            <Form.Control.Feedback type="invalid">
                                                Invalid qunatity requirement.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </td>
                            </tr>
                            <tr>
                                <td>{'Sizes'}</td>
                                <td>
                                    <Col md={{ span: 7, offset: 4 }}>
                                        <Form.Group controlId="validationCustom02">
                                            <Form.Control as="select" ref={reference => sizeRef = reference}>
                                                <option key={0}>{"No Preference"}</option>
                                                {obj.data.size.map((item, index) => <option key={index + 1}>{item}</option>)}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </td>
                            </tr>
                            <tr>
                                <td>{'Shipping destination'}</td>
                                <td>
                                    <Form.Group controlId="validationCustom03">
                                        <Form.Control required ref={reference => portRef = reference} type={"text"} placeholder={'NA if shipping isn\'t needed'} />
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>{'Comments'}</td>
                                <td>
                                    <Form.Group controlId="validationCustom04">
                                        <Form.Control ref={reference => notesRef = reference} as="textarea" rows="3" />
                                    </Form.Group>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                        <ButtonToolbar>
                            <Button variant="outline-success" type="submit">
                                <Spinner as="span" animation="grow" size="sm" id="loading" role="status"
                                    aria-hidden="true" style={{ display: 'none' }} />
                                <div id='spinner-btn-text'>Send it</div></Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}




export default Modaldialog;