import React from 'react'

class OrderStatus extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <div className="card card-warning">
                        <div className="card-header">
                            <h3 className="card-title">Update Status</h3>
                        </div>
                        <div className="card-body">
                            <form role="form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Invoice ID</label>
                                            <input type="text" className="form-control" placeholder="INV-XXX"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Customer ID</label>
                                            <input type="text" className="form-control" placeholder="CUST-XXX" disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input type="text" className="form-control" placeholder="Quantity"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Update Status</label>
                                            <select className="form-control">
                                                <option>Order Rejected</option>
                                                <option>New</option>
                                                <option>Pending</option>
                                                <option>Shipped</option>
                                                <option>Reached</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Comments</label>
                                            <textarea class="form-control" rows="3" placeholder="Why is the status changed?"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderStatus