import React from 'react'

class View extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Billing</h3>
                        </div>
                        <form role="form">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <div className="form-group">
                                            <label>Order ID</label>
                                            <input type="text" className="form-control" placeholder="ORD-XXXXX" disabled/>
                                        </div>
                                    </div>
                                        <div className='col-sm-3'>
                                        <div className="form-group">
                                            <label>Invoice ID</label>
                                            <input type="text" className="form-control" placeholder="INV-XXXXX"/>
                                        </div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className="form-group">
                                            <label>Customer ID</label> 
                                            <input type="text" className="form-control" placeholder="CUST-XXXXX" disabled/>
                                        </div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className="form-group">
                                            <label>Payment Due Date </label>
                                            <input type="text" className="form-control" placeholder="Payment Due Date" disabled/>
                                        </div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className="form-group">
                                            <label>Total</label>
                                            <input type="text" className="form-control" placeholder="Total" disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>  
                    </div> 
                </div>
                <div className="col-12">
                    <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Detailed View</h3>

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