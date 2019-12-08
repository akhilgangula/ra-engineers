import React from 'react'

class AllOrders extends React.Component {
    render() {
        return (
            <div class="row">
            <div class="col-12">
                <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Viewing all Orders</h3>

                    <div class="card-tools">
                    <div class="input-group input-group-sm" style={{width: '150px'}}>
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search"/>

                        <div class="input-group-append">
                        <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card-body table-responsive p-0" style={{height: '500px'}}>
                    <table class="table table-head-fixed">
                    <thead>
                            <tr>
                            <th>Order ID</th>
                            <th>Invoice ID</th>
                            <th>Customer ID</th>
                            <th>Product</th>
                            <th>Sub Category</th>
                            <th>Price/Unit</th>
                            <th>Quantity</th>
                            <th>Sub total</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Order ID - xxx</td>
                            <td>Invoice - xxx</td>
                            <td>Cust ID - xxx</td>
                            <td>Magnasite</td>
                            <td>Powder</td>
                            <td>33</td>
                            <td>3</td>
                            <td>99</td>
                            <td><span className="badge badge-warning">Pending</span></td>
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

export default AllOrders