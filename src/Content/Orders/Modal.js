import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom'
const PopulateRequest = (obj) => {
    return obj.data.request.map((request, index) =>
        <Card key={index}>
            <Card.Header>
                <Card.Title>Product Card - {index+1}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle>
                    Detailed Overview :
                </Card.Subtitle>
                <Table>
                    <tbody>
                        {
                            Object.keys(request).map((entry, entryIndex) => <GetEntry key={entryIndex + "" + index} entryId={entryIndex + "" + index} title={entry} value={request[entry]} />)
                        }
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer>
                <Card.Link href="#">Reject Price</Card.Link>
                <Card.Link href="#">Place Order</Card.Link>
            </Card.Footer>
        </Card>
    )
}


const GetEntry = (entry) => <tr key={entry.entryId}>
    <td>
        {entry.title}
    </td>
    <td >
        {entry.value}
    </td>
</tr>





class ModalDialog extends React.Component {

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
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Custom Modal Styling
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <PopulateRequest data={this.props.data} />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleSubmit} id="newRequest">New Request</Button>
                        <Button variant="secondary" onClick={this.close} >Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalDialog