import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/plugins/fontawesome-free/css/all.min.css'
class CreateBill extends React.Component {

    render() {
        return (
            <div>
                <form role="form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-secondary">
                                <div class="card-header">
                                    <h3 class="card-title">Customer Basic Details</h3>
                                </div>
                                <div class="card-body">
                                    <form role="form">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Order ID</label>
                                                    <input type="text" class="form-control" placeholder="ORD - XXXXX"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Invoice ID</label>
                                                    <input type="text" class="form-control" placeholder="INV - XXXXX"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Customer ID</label>
                                                    <input type="text" class="form-control" placeholder="CUST - XXXXX"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-2">
                                                <div class="form-group">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
                                                        <label class="custom-control-label" for="customSwitch1">Edit Address Manually?</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Customer Address</label>
                                                <textarea class="form-control" rows="3" placeholder="Will be Automatically populated" disabled></textarea>
                                            </div>
                                        </div>                   
                                    </form>
                                </div>
                                </div>
                            </div>
                        <div class="col-md-6">
                            <div class="card card-warning">
                                <div class="card-header">
                                    <h3 class="card-title">General Elements</h3>
                                </div>
                                <div class="card-body">
                                    <form role="form">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Quantity</label>
                                                    <input type="text" class="form-control" placeholder="Quantity"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Price</label>
                                                    <input type="text" class="form-control" placeholder="Price per Qty"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Product</label>
                                                    <select class="form-control">
                                                        <option>Select a product</option>
                                                        <option>Magnasite</option>
                                                        <option>Gypsum-Lumps</option>
                                                        <option>Gypsum-Powder</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Subtotal</label>
                                                    <input type="text" class="form-control" placeholder="Will be calculated"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Add Entry</button>
                                    </form>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-sm-8'>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Complete Picture</h3>
                                    <div class="card-tools">
                                        <div class="input-group input-group-sm" style={{width: '150px'}}>
                                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search"/>
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover">
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
                                        <td><i class="fas fa-minus-circle"></i></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateBill