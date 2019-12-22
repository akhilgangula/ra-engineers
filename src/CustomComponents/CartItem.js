import React from 'react' 
import './Cartltem.css'
class CartItem extends React.Component {


    constructor() {
        super()
        this.removeCard = this.removeCard.bind(this)
    }

    removeCard(event) {
        let presentNode = event.target;
        while(!presentNode.classList.contains("card-outline")) {    
            presentNode = presentNode.parentNode;
        }
        presentNode = presentNode.parentNode;
        presentNode.removeChild(presentNode.childNodes[0]);
    }


    render() {
        return (
                <div className="col-md-12">
                    <div className="card card-outline card-success">
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
                                <div className='col-sm-4 cart-description-content'>
                                    {this.props.product}
                                </div>
                                <div className='col-sm-4 cart-description-content'>
                                    {this.props.qty}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CartItem