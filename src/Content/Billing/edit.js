import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/plugins/fontawesome-free/css/all.min.css'
class EditBill extends React.Component {

    render() {
        return (
            <div>
                <form role="form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Customer Basic Details</h3>
                                    <div class="card-tools">
                                        <div class="input-group input-group-sm" style={{width: '300px'}}>
                                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search for INVOICE ID"/>
                                            <div class="input-group-append">
                                            <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label>Order ID</label>
                                                    <input type="text" className="form-control" placeholder="ORD - XXXXX" disabled/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label>Customer ID</label>
                                                    <input type="text" className="form-control" placeholder="CUST - XXXXX" disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Customer Address</label>
                                                <textarea className="form-control" rows="3" placeholder="Will be Automatically populated" disabled></textarea>
                                            </div>
                                        </div>                   
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-6">
                            <div className="card card-warning">
                                <div className="card-header">
                                    <h3 className="card-title">General Elements</h3>
                                </div>
                                <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Quantity</label>
                                                    <input type="text" className="form-control" placeholder="Quantity"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input type="text" className="form-control" placeholder="Price per Qty"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Product</label>
                                                    <select className="form-control">
                                                        <option>Select a product</option>
                                                        <option>Magnasite</option>
                                                        <option>Gypsum-Lumps</option>
                                                        <option>Gypsum-Powder</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Subtotal</label>
                                                    <input type="text" className="form-control" placeholder="Will be calculated"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Entry</button>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Complete Picture</h3>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{width: '150px'}}>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Product</th>
                                        <th>Price/Unit</th>
                                        <th>Quantity</th>
                                        <th>Sub total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Magnasite</td>
                                        <td>33</td>
                                        <td>3</td>
                                        <td>99</td>
                                        <td><i className="fas fa-minus-circle"></i></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default EditBill