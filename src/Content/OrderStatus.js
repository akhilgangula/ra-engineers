import React from 'react'

class OrderStatus extends React.Component {
    render() {
        return (
            <div>
                <div class="col-md-6">
                    <div class="card card-warning">
                        <div class="card-header">
                            <h3 class="card-title">Update Status</h3>
                        </div>
                        <div class="card-body">
                            <form role="form">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Invoice ID</label>
                                            <input type="text" class="form-control" placeholder="INV-XXX"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Customer ID</label>
                                            <input type="text" class="form-control" placeholder="CUST-XXX" disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Quantity</label>
                                            <input type="text" class="form-control" placeholder="Quantity"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Update Status</label>
                                            <select class="form-control">
                                                <option>New</option>
                                                <option>Pending</option>
                                                <option>Shipped</option>
                                                <option>Reached</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Update</button>
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