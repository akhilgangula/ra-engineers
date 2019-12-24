import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
const PopulateRequest = (data) => {
    return data.data.request.map((request, index) =>
        <div key={index}>
            <span className="overview">
                {request.qty + " tons of " + request.product}
            </span>
            <PopulateSwitch index={index} />
        </div>)
}



class PopulateSwitch extends React.Component {

    state = {
        checkBoxState: true,
        checkBoxLabel: 'Accept'
    }

    render = () => {
        return <span>

            <Form.Group>
                <Row>
                    <Form.Check
                        type="switch"
                        id={`custom-switch-${this.props.index}`}
                        label={this.state.checkBoxLabel}
                        checked={this.state.checkBoxState}
                        onChange={() => this.setState({ checkBoxState: !this.state.checkBoxState, checkBoxLabel: this.state.checkBoxState ? "Reject" : "Accept" })}
                    />
                    <Decision accept={this.state.checkBoxState} />
                </Row>
            </Form.Group>
        </span>
    }
}

const Decision = (obj) => {
    if (obj.accept == true)
        return <PopulatePrice />
    return <PopulateTextBox />
}

const PopulatePrice = () => {
    return <Col sm={4}>
        <InputGroup className="mb-5">
            <InputGroup.Prepend>
                <InputGroup.Text>₹</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="Price per unit" />
        </InputGroup>
    </Col>
}

const PopulateTextBox = () => {
    return <Col sm={8}><Form.Control type="text" placeholder="Reject Reason" /></Col>

}



class Modaldialog extends React.Component {

    state = {
        show: false,
    }

    handleSubmit = () => {
        //Handle the sumbission here
        this.close();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.show !== prevState.show) {
            return ({ show: nextProps.show })
        }
        return null;
    }

    close = () => {
        this.props.changeState(false);
        this.setState({ show: false })
    }

    render = () => {
        return (
            <>
                <Modal
                    show={this.state.show}
                    onHide={() => this.close()}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Respond
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Client has requested quotations for following products:<br />
                            <PopulateRequest data={this.props.data} />
                            <br />

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.close}>Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Respond</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}


export default Modaldialog;