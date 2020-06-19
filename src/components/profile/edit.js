import React, { Component } from "react";
import './profile.css'
import data from "../data.json"
class Edit extends Component {
    constructor(){
        super();
        this.state={
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            location: data.location
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        if(localStorage.getItem("firstname")){
          this.setState({"firstName":localStorage.getItem("firstname"),
                          "lastName":localStorage.getItem("lastname"),
                          "description":localStorage.getItem("description"),
                        "location":localStorage.getItem("location")})
        }
      }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit() {
        localStorage.setItem("firstname",this.state.firstName)
        localStorage.setItem("lastname",this.state.lastName)
        localStorage.setItem("description",this.state.description)
        localStorage.setItem("location",this.state.location)
    }

  render() {
    var data=localStorage.getItem("firstname")
    console.log("data",data)
    return (
        <div className="container" id="edit-body">
	    <div className="row">
            <div className="col-md-2">
                <div className="text-center" >
                     <img id="profile-pic" src="https://i.ibb.co/Q87hQF2/Beauty-Plus-20180206225759-save.jpg" class="avatar img-circle" alt="avatar"/>
          
                </div>
            </div>

            <div className="col-md-10 personal-info" id = "edit-profile">
            <form className="form-horizontal" role="form">
                <div className="row form-group">
                    <label className="col-3">First name:</label>
                    <div className="col-8">
                         <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-3 control-label">Last name:</label>
                    <div className="col-8">
                         <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-3 control-label">Location:</label>
                    <div className="col-8">
                         <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-3 control-label">Description:</label>
                    <div className="col-8">
                         <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
                    </div>
                </div>
          
                <div className="row form-group">
                    <div class="col-md-8" id = "changes">
                    <a id = "changes-cancel" href="/">Cancel</a>
                    <a class="btn btn-primary rounded-pill" value="Save Changes" href="/" id = "save-changes" onClick={this.handleSubmit}>Save</a>  
                    </div>
                 </div> 
            </form>
            </div>
      </div>
  </div>

    
    );
  }
}

export default Edit;