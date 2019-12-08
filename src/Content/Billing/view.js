import React from 'react'

class View extends React.Component {
    render() {
        return (
            <div class='row'>
                <div class='col-sm-12'>
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Billing</h3>
                        </div>
                        <form role="form">
                            <div class="card-body">
                                <div class='row'>
                                    <div class='col-sm-3'>
                                        <div class="form-group">
                                            <label>Order ID</label>
                                            <input type="text" class="form-control" placeholder="ORD-XXXXX" disabled/>
                                        </div>
                                    </div>
                                        <div class='col-sm-3'>
                                        <div class="form-group">
                                            <label>Invoice ID</label>
                                            <input type="text" class="form-control" placeholder="INV-XXXXX"/>
                                        </div>
                                    </div>
                                    <div class='col-sm-3'>
                                        <div class="form-group">
                                            <label>Customer ID</label> 
                                            <input type="text" class="form-control" placeholder="CUST-XXXXX" disabled/>
                                        </div>
                                    </div>
                                    <div class='col-sm-3'>
                                        <div class="form-group">
                                            <label>Payment Due Date </label>
                                            <input type="text" class="form-control" placeholder="Payment Due Date" disabled/>
                                        </div>
                                    </div>
                                    <div class='col-sm-3'>
                                        <div class="form-group">
                                            <label>Total</label>
                                            <input type="text" class="form-control" placeholder="Total" disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>  
                    </div> 
                </div>
                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Detailed View</h3>

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
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default View 