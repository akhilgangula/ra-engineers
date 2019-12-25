import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './style.css'
import Spinner from 'react-bootstrap/Spinner'
function Modaldialog(obj) {
    var ommit = ['src', 'id', 'alt', 'qty', 'size']

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toPascal = (str) => {
        return (str.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }))
    }
    const handleSubmit = () => {
        console.log('Caled')
        document.getElementById('loading').classList.remove('hide-spinner')
        document.getElementById('spinner-btn-text').classList.add('hide-spinner')
        document.getElementById('loading').classList.add('show-spinner')

        //handle all the validations
        //post it to server, wait for ack
        
        /**
         * parameters to be returned product, type, size, qty and port
         * 
         */
        
        handleClose()


        //if failed
        //document.getElementById('loading').classList.add('hide-spinner')
        // document.getElementById('spinner-btn-text').classList.remove('hide-spinner')
        // document.getElementById('loading').classList.remove('show-spinner')
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
                <Table>
                    <tbody style={{ textAlign: 'center', alignContent: 'center' }}>
                        {Object.keys(obj.data).filter(key => !ommit.includes(key)).map((mapKey, index) => <tr key={index}><td>{toPascal(mapKey)}</td><td>{obj.data[mapKey]}</td></tr>)}
                        <tr><td>{'Quantity (in tons)'}</td><td><Quantity data={obj.data.qty} /></td></tr>
                        <tr><td>{'Sizes'}</td><td><Size data={obj.data.size} /></td></tr>
                        <tr><td>{'Shipping destination'}</td><td><TextBox type={'text'} message={'NA if shipping isn\'t needed'} /></td></tr>
                        <tr><td>{'Comments'}</td><td><Form.Control as="textarea" rows="3" /></td></tr>
                    </tbody>
                </Table>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                    <ButtonToolbar>
                        <Button variant="outline-success" onClick={handleSubmit}>
                            <Spinner as="span" animation="grow" size="sm" id="loading" role="status"
                                aria-hidden="true" className="hide-spinner" /><div id='spinner-btn-text'>Send it</div></Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        </>
    );
}

class Quantity extends React.Component {
    render() {
        return (<Col md={{ span: 4, offset: 4 }}>
            <Form.Control type="number" style={{ fontSize: "15px" }} defaultValue={this.props.data} />
        </Col>
        )
    }
}

class Size extends React.Component {
    render() {
        return (<Col md={{ span: 5, offset: 4 }}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                    {this.props.data.map((item, index) => <option key={index}>{item}</option>)}
                </Form.Control>
            </Form.Group></Col>
        )
    }
}

class TextBox extends React.Component {
    render() {
        return (
            <Form.Control type={this.props.type} placeholder={this.props.message} />
        )
    }
}



export default Modaldialog;