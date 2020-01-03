import React from 'react' 
import axios from 'axios'
import './create.css'
import avatar1 from './../../assets/avatars/man-1.svg'
import avatar2 from './../../assets/avatars/man-2.svg'
import avatar3 from './../../assets/avatars/man-3.svg'
import avatar4 from './../../assets/avatars/man-4.svg'
import avatar5 from './../../assets/avatars/girl-1.svg'
class CreateUser extends React.Component {

    state = {
        username : '',
        password : '',
        avatar : null,
        displayName : '',
        firmName : '',
        emailID : '',
        address : '',
        phoneNumber : '',
        
    }
    constructor() {
        super()
        this.generatePassword = this.generatePassword.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.selectAvatar = this.selectAvatar.bind(this)
        this.successHandler = this.successHandler.bind(this)
        this.failureHandler = this.failureHandler.bind(this)
    }

    failureHandler=()=> {

    }

    successHandler=()=>{
        console.log('inhandler')
        document.getElementById('alert-window').style.display = 'block'
    }
   
    generatePassword = () => {
        var length = 6,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        this.setState({password: retVal});
        document.getElementById('generator').disabled = true;
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting")
        
        axios.post('http://localhost:8080/users/', this.state)
          .then(function (response) {
              console.log(response.status)
            if(response.status===201) {
                    console.log(response.data.message.status)
                if(response.data.message.status===1) {
                    //Success
                    console.log('inhandler')
                    document.getElementById('alert-window').style.display = 'block'
                } else {
                    //failure
                    this.failureHandler()
                    
                }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    selectAvatar = (event) => {
        this.setState({avatar: event.target.src})
    }
    

    render() {
        return (
            <div>
                <div id='alert-window' className="alert alert-success alert-dismissible" style={{display : 'none'}}>
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h5><i className="icon fas fa-check"></i> Alert!</h5>
                  User created successfully and mail is triggered.
                </div>
            
                <form onSubmit={this.formSubmit}>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="card card-warning">
                            <div className="card-header">
                                <h3 className="card-title">User Credentials</h3>
                            </div>
                            <div className="card-body">
                                    <div className="row">
                                    <div className="col-sm-5">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" placeholder="Username can be email ID" onChange={(event)=>this.setState({username: event.target.value})} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label>password</label>
                                            <input type='password' className="form-control" value={this.state.password} placeholder="Autogenerated" disabled onChange={(event)=>this.setState({password: event.target.value})} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group generate">
                                            <input type='button' id='generator' className="btn btn-primary " onClick={this.generatePassword} value='Generate'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-secondary">
                            <div className="card-header">
                                <h3 className="card-title">User Profile</h3>
                            </div>
                            <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                    <label>Display Name</label>
                                                    <input type="text" className="form-control" placeholder="Set a Display Name" onChange={(event)=>this.setState({displayName: event.target.value})} required/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Firm Name</label>
                                                    <input type="text" className="form-control" placeholder="Name of the Firm" onChange={(event)=>this.setState({firmName: event.target.value})} required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-info">
                            <div className="card-header">
                                <h3 className="card-title">Contact Detials</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Billing Address</label>
                                            <textarea className="form-control" rows="3" placeholder="Carefully enter the address, this will be used for billing the client" onChange={(event)=>this.setState({address: event.target.value})} required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input type="text" className="form-control" value={this.state.username} placeholder="Email" onChange={(event)=>this.setState({emailID: event.target.value})} required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="text" className="form-control" placeholder="Contact number" onChange={(event)=>this.setState({phoneNumber: event.target.value})} required/>
                                        </div>
                                        <div className="col-sm-12">
                                            <div>Select Avatar</div>
                                            <img src={avatar1} alt={'avatar1'} className="avatar" onClick={this.selectAvatar}/>
                                            <img src={avatar2} alt={'avatar2'} className="avatar" onClick={this.selectAvatar}/>
                                            <img src={avatar3} alt={'avatar3'} className="avatar" onClick={this.selectAvatar}/>
                                            <img src={avatar4} alt={'avatar4'} className="avatar" onClick={this.selectAvatar}/>
                                            <img src={avatar5} alt={'avatar5'} className="avatar" onClick={this.selectAvatar}/>
                                        </div>
                                    </div>
                                    <div className='col-sm-1' >
                                        
                                    </div>
                                    <div className='col-sm-1 selectedAvator'>
                                        <img src={this.state.avatar} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Create User</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
        )
    }
}

export default CreateUser