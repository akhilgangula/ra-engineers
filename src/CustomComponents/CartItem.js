import React from 'react'
import './Cartltem.css'
import NumberField from './NumberField'
class CartItem extends React.Component {


    constructor() {
        super()
        this.removeCard = this.removeCard.bind(this)
    }

    removeCard(event) {
        this.props.onDelete(this.props.id)
    }


    render() {
        return (
            <div className="col-md-12">
                <div className="card card-outline card-success" id={this.props.id}>
                    <div className="card-header">
                        <h3 className="card-title">{this.props.header}</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" onClick={this.removeCard}>
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className="product-image-thumb" >
                                    <img src={this.props.imgSrc} alt='product' />
                                </div>
                            </div>
                            <div className='col-sm-4 '>
                                <div className="heading">
                                    Material
                                </div>
                                <div className="cart-description-content">
                                    {this.props.product}
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className="heading">
                                    Quantity
                                </div>
                                <div className="cart-description-content">
                                    <NumberField value={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem