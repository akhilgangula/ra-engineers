import React from 'react' 
import './create.css'
import avatar1 from './../../assets/avatars/man-1.svg'
import avatar2 from './../../assets/avatars/man-2.svg'
import avatar3 from './../../assets/avatars/man-3.svg'
import avatar4 from './../../assets/avatars/man-4.svg'
import avatar5 from './../../assets/avatars/girl-1.svg'
class CreateUser extends React.Component {

    render() {
        return (
            <div>
                <div class='row'>
                    <div class="col-md-6">
                        <div class="card card-warning">
                            <div class="card-header">
                                <h3 class="card-title">User Credentials</h3>
                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>Username</label>
                                                <input type="text" class="form-control" placeholder="Username can be email ID"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>password</label>
                                                <input type="text" class="form-control" placeholder="Autogenerated" disabled/>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group generate">
                                                <button type="submit" class="btn btn-primary ">Generate</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card card-secondary">
                            <div class="card-header">
                                <h3 class="card-title">User Profile</h3>
                            </div>
                            <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                    <label>Display Name</label>
                                                    <input type="text" class="form-control" placeholder="Set a Display Name"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Firm Name</label>
                                                    <input type="text" class="form-control" placeholder="Name of the Firm"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Contact Detials</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Billing Address</label>
                                            <textarea class="form-control" rows="4" placeholder="Carefully enter the address, this will be used for billing the client"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>Phone number</label>
                                            <input type="text" class="form-control" placeholder="Contact number"/>
                                        </div>
                                        <div class="col-sm-12">
                                            <img src={avatar1} class="avatar"/>
                                            <img src={avatar2} class="avatar"/>
                                            <img src={avatar3} class="avatar"/>
                                            <img src={avatar4} class="avatar"/>
                                            <img src={avatar5} class="avatar"/>
                                        </div>
                                    </div>
                                    <div class='col-sm-3'>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">Create User</button>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default CreateUser