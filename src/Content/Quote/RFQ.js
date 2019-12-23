import React from 'react'
import product1 from './../../assets/img/Gypsum Lumps.jpeg'
import product2 from './../../assets/img/Pop Powder.jpeg'
import product3 from './../../assets/img/Raw Magnesite Lumps.jpeg'
import product4 from './../../assets/img/Raw Magnesite powder.jpg'
import product5 from './../../assets/img/Raw Gypsum Powder.jpeg'
import './RFQ.css'
import CartItem from '../../CustomComponents/CartItem'
import BigPic from '../../CustomComponents/BigPic'
import Notification from '../../CustomComponents/Notification'
import { MDBContainer } from "mdbreact";
import Model from './../../CustomComponents/Model'
class RFQ extends React.Component {

    state = {
        selectedProduct: null,
        selectedProductName: null,
        id: 1,
        //All available items
        items: [
            {
                id: 1,
                src: product1,
                alt: "Gypsum Lumps",
                qty: 0,
                inCart: false
            },
            {
                id: 2,
                src: product2,
                alt: "Pop Powder",
                qty: 0,
                inCart: false
            },
            {
                id: 3,
                src: product3,
                alt: "Raw Magnesite Lumps",
                qty: 0,
                inCart: false
            },
            {
                id: 4,
                src: product4,
                alt: "Raw Magnesite powder",
                qty: 0,
                inCart: false
            },
            {
                id: 5,
                src: product5,
                alt: "Raw Gypsum Powder",
                qty: 0,
                inCart: false
            },
        ],
        keys: 0, //for push notifications
        notification: [],
        model: null
    }

    constructor() {
        super();
        this.updateProduct = this.updateProduct.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.handleQty = this.handleQty.bind(this);
        this.pushNotification = this.pushNotification.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.displayAllItems = this.displayAllItems(this);
    }


    removeItem = (id) => {
        var array = this.state.items;
        var index = array.findIndex(ele => ele.id === id)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ items: array });
        }
    }

    handleQty() {
        var inputField = document.getElementsByName('quantity');
        var qty = parseInt(inputField[0].value);
        if (qty <= 0) {
            this.pushNotification("Set the Quantity to be quoted");
            return false;
        }
        this.setState({ qty: qty });
    }

    updateProduct(event) {
        const { id, src, alt } = event.target
        this.setState({ selectedProduct: src })
        this.setState({ selectedProductName: alt })
        this.setState({ id: id })
    }

    pushNotification(message) {
        this.setState({ keys: this.state.keys + 1 }, () => {
            this.setState({ notification: [...this.state.notification, <Notification key={this.state.keys} title="Error! " message={message} />] })
        })
    }

    addToCart() {
        if (this.state.selectedProductName == null) {
            this.pushNotification("Select a product to add to cart");
            return;
        }
        const findIndex = this.state.items.findIndex(ele => ele.id == this.state.id);

        if (findIndex > -1) {
            if (this.state.items[findIndex].inCart === true) {
                this.pushNotification("Item already added");
                return;
            }
            let copyOfItems = this.state.items
            copyOfItems[findIndex].inCart = true
            this.setState({ items: copyOfItems })
        }

    }
    displayAllItems = () => {
        return this.state.items.map(item =>
            <div key={item.id} className="product-image-thumb active">
                <img key={item.id} src={item.src} alt={item.alt} onClick={this.updateProduct} id={item.id} />
            </div>
        )
    }

    actionButtons = (action, styling, message) =>
        <div className='col-sm-2'>
            <a className="btn btn-app" onClick={action}>
                <i className={styling}></i>{message}
            </a>
        </div>


    renderCards = () => {
        return this.state.items.filter(item => item.inCart === true).map(item =>
            <CartItem key={item.id} id={item.id} header={"Item " + item.id} imgSrc={item.src} product={item.alt} qty={item.qty + " tons"}
                onDelete={this.removeItem} onChange={this.updateQty} />
        )
    }

    updateQty = (id, value) => {
        console.log(id);
        console.log(this.state.items[0].id == id);

        const findIndex = this.state.items.findIndex(ele => ele.id == id);
        console.log("index: " + findIndex);
        if (findIndex < -1) {
            return;
        }

        let copyOfItems = this.state.items
        copyOfItems[findIndex].qty = value
        this.setState({ items: copyOfItems }, () => console.log(this.state.items)
        )
    }

    render() {
        return (
            <div>
                <MDBContainer
                    style={{
                        width: "auto",
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        zIndex: 1300
                    }}
                >
                    {this.state.notification}
                </MDBContainer>

                <section className="content">
                    <div className="card card-solid ">
                        <div className="card-body">
                            <div className="row">

                                <div className="col-12 col-sm-6">
                                    <h3>Select from below</h3>
                                    <div className="col-12 product-image-thumbs">
                                        {this.displayAllItems}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <div className='row'>
                                        <h3 className="my-3">You have selected: {this.state.selectedProductName}</h3>
                                        <hr />
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-2'>
                                            {this.actionButtons(this.addToCart, 'fas fa-shopping-cart', 'Add to Cart')}
                                        </div>
                                        <div className='col-sm-3'>
                                            
                                            <Model data={this.state.items} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=" col-12 col-sm-6">
                                    <BigPic key={this.state.id} src={this.state.selectedProduct} />
                                </div>
                                <div className="col-12 col-sm-6 ">
                                    <div id="cart-overview">
                                        {this.renderCards()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default RFQ