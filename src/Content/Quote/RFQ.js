import React from 'react'
import product1 from './../../assets/img/Gypsum Lumps.jpeg'
import product2 from './../../assets/img/Pop Powder.jpeg'
import product3 from './../../assets/img/Raw Magnesite Lumps.jpeg'
import product4 from './../../assets/img/Raw Magnesite powder.jpg'
import product5 from './../../assets/img/Raw Gypsum Powder.jpeg'
import './RFQ.css'
import CartItem from '../../CustomComponents/CartItem'
class RFQ extends React.Component {

    state = {
        selectedProduct: product1,
        selectedProductName: "Gypsum Lumps"
    }

    constructor() {
        super();
        this.updateProduct = this.updateProduct.bind(this);
    }

    updateProduct(event) {
        this.setState({ selectedProduct: event.target.src })
        this.setState({ selectedProductName: event.target.alt })
    }

    render() {
        return (
            <div>
                <section className="content">
                    <div className="card card-solid">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="col-12 product-image-thumbs">
                                        <div className="product-image-thumb active"><img src={product1} alt="Gypsum Lumps" onClick={this.updateProduct} /></div>
                                        <div className="product-image-thumb" ><img onClick={this.updateProduct} src={product2} alt="Pop Powder" /></div>
                                        <div className="product-image-thumb" ><img onClick={this.updateProduct} src={product3} alt="Raw Magnesite Lumps" /></div>
                                        <div className="product-image-thumb" ><img onClick={this.updateProduct} src={product4} alt="Raw Magnesite powder" /></div>
                                        <div className="product-image-thumb" ><img onClick={this.updateProduct} src={product5} alt="Raw Gypsum Powder" /></div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className='row'>

                                        <h3 className="my-3">Selected Product: {this.state.selectedProductName}</h3>
                                        <hr />

                                        <div className=" btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-default text-center">
                                                <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
                                                <span className="text-xl">S</span>
                                                <br />
                                                Small
                                            </label>
                                            <label className="btn btn-default text-center">
                                                <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
                                                <span className="text-xl">M</span>
                                                <br />
                                                Medium
                                            </label>
                                            <label className="btn btn-default text-center">
                                                <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
                                                <span className="text-xl">L</span>
                                                <br />
                                                Large
                                            </label>
                                            <label className="btn btn-default text-center">
                                                <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
                                                <span className="text-xl">XL</span>
                                                <br />
                                                Xtra-Large
                                            </label>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='cart'>
                                            <a class="btn btn-app">
                                                <i class="fas fa-shopping-cart"></i>Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=" col-12 col-sm-6">
                                    <img id='selectedImg' className="selectedProduct" src={this.state.selectedProduct} alt="selected Products" />
                                </div>
                                <div id="cart-overview" className=" col-12 col-sm-6">
                                    <CartItem header="Product" imgSrc={product2} product="Magnesite" qty='33'/>
                                    <CartItem />
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