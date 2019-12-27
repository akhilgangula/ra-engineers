import React from 'react'
import { Button, Modal, ButtonToolbar, Container } from 'react-bootstrap';
import { GetBadge } from './../../lib/Styling'
import { CamelCaseToUpper } from './../../lib/Utils'
import { Table } from 'react-bootstrap';
import * as Constant from './../../lib/Constants'
function MyVerticallyCenteredModal(props) {
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
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-"+Constant.DANGER} onClick={props.onHide}>Reject</Button>
                <Button variant={"outline-"+Constant.SUCCESS} onClick={props.onHide}>Ack</Button>
                <Button variant={"outline-"+Constant.DARK} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const PopulateData = (obj) => Object.keys(obj.data).map((item, index) => <tr key={index}><td>{CamelCaseToUpper(item)}</td><td>{obj.data[item].toString().toUpperCase()}</td></tr>)

function App(obj) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <tr onClick={() => setModalShow(true)}>

                <PopulateRows rowData={obj.data} />
                <td><GetBadge status={obj.data['status'].toString()} /></td>
            </tr>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={obj.data}
            />
        </>
    );
}
const PopulateRows = (obj) => Object.keys(obj.rowData).filter(item => item != 'status').map((item, index) => <td key={index}>{obj.rowData[item]}</td>)
export default App