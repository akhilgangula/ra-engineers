import React from 'react'

class AllOrders extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Viewing all Orders</h3>

                    <div className="card-tools">
                    <div className="input-group input-group-sm" style={{width: '150px'}}>
                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>

                        <div className="input-group-append">
                        <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-body table-responsive p-0" style={{height: '500px'}}>
                    <table className="table table-head-fixed">
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