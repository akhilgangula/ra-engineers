import React from 'react'
import Card from 'react-bootstrap/Card'
import product1 from './../../assets/img/Gypsum Lumps.jpeg'
import product2 from './../../assets/img/Pop Powder.jpeg'
import product3 from './../../assets/img/Raw Magnesite Lumps.jpeg'
import product4 from './../../assets/img/Raw Magnesite powder.jpg'
import product5 from './../../assets/img/Raw Gypsum Powder.jpeg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ModalDialog from './RequestConfirmation'
import { Alert } from 'react-bootstrap'

class Request extends React.Component {
    state = {
        items: [
            {
                id: 1,  //will be used as product ID
                src: product1,
                product: "GYPSUM",
                alt: "Gypsum Lumps",
                type: "LUMPS",
                qty: 0,
                size: ['small', 'medium', 'large'],
            },
            {
                id: 2,
                src: product2,
                product: "PLASTER OF PARIS",
                alt: "Pop Powder",
                type: "POWDER",
                qty: 0,
                size: ['NA']
            },

            {
                id: 4,
                src: product4,
                product: "MAGNESITE",
                alt: "Raw Magnesite Powder",
                type: "POWDER",
                qty: 0,
                size: ['NA']
            },
            {
                id: 3,
                src: product3,
                product: "MAGNESITE",
                alt: "Raw Magnesite Lumps",
                type: "LUMPS",
                qty: 0,
                size: ['small', 'medium', 'large']
            },
            {
                id: 5,
                src: product5,
                product: "GYPSUM",
                alt: "Raw Gypsum Powder",
                type: "POWDER",
                qty: 0,
                size: ['NA']
            },
        ],
        show: false,
    }
    render() {
        return (
            <div>
                <Container>
                    <Alert variant="success">
                        <Alert.Heading>Request placed successfully</Alert.Heading>
                        <p>
                            You are request for <b>PRODUCT</b> (<b>TYPE</b>) for <b>QUANTITY</b> (of <b>SIZE</b>) tons is placed for <b>PORT</b>. <br/>
                            <b>Additional Comments</b> (if any): ADDITIONAL COMMENTS<br/>We will get back soon.
  </p>
                        <hr />
                        <p className="mb-0">
                            Maintain this reference id: <b>request-123</b>
  </p>
                    </Alert>

                    <Row>

                        <GetAllCards data={this.state.items} />
                    </Row>
                </Container>
            </div>
        )
    }

}

const GetAllCards = (obj) => obj.data.map((item, index) => <GetPorductCard key={index} data={item} />)

class GetPorductCard extends React.Component {


    render() {
        return (
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.data.src} />
                    <Card.Body>
                        <Card.Title>{this.props.data.alt}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <ModalDialog data={this.props.data} />
                    </Card.Footer>
                </Card>
            </Col>)
    }
}

export default Request