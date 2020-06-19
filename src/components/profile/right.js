import React, { Component } from "react";
import './right.css'
import data from "../data.json"


class Right extends Component{
  constructor(){
    super();
    this.state={
      "firstname":data.firstName,
      "lastname":data.lastName,
      "description":data.description,
      "location":data.location
    }

  }

  componentDidMount(){
    if(localStorage.getItem("firstname")){
      this.setState({"firstname":localStorage.getItem("firstname"),
                      "lastname":localStorage.getItem("lastname"),
                      "description":localStorage.getItem("description"),
                    "location":localStorage.getItem("location")})
    }
  }

    render(){
        return(
            <div>
                <div className="row" id="header">
                    <div className="col-2" id='user-image-profile'>
                        <img src="https://i.ibb.co/Q87hQF2/Beauty-Plus-20180206225759-save.jpg" alt="logo" />
                    </div>
                    <div className="col-8 text-left" id = "profile-head">
                        <a href="/editprofile"><h6>Edit</h6></a>
                        <h3 id="primary-text" >{this.state.firstname} {this.state.lastname}</h3>
                        <h6 id="secondary-text" className='text-secondary'>{this.state.location}</h6>
                        <h6 id="secondary-text" className='text-secondary'>{this.state.description}</h6>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" id="upload">Upload Resume</button>
                    </div>
                </div>
                <div id = "profile-body" >
                <div className="row" id="Head-nav">
                    <h4 className="text-secondary" id="Head-nav">Technical skills</h4>
                </div>
                <div className="row" id="Head">
                    <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Languages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Applications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Methods</a>
                    </li>
                    </ul>
                </div>
                <div className="row" id="header-skills">
                    Add skills
                </div>
                <div className="row" id="Head-nav">
                    <h4 className="text-secondary">Busincess Experience</h4>
                </div>
                <div className="row" id="Head">
                    <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Delivery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Impact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Communication</a>
                    </li>
                    </ul>
                </div>
                <div className="row" id="header-skills">
                    Add skills
                </div>
                <div>
                    <div className="row" id="Head-nav">
                        <h4 className="text-secondary">Preferences</h4>
                    </div>
                    <div className="row" id="Head">
                    
                        <div className="col-5" id="leftcontainer">
                            <h5 className="text-left">My expectations</h5>
                            <div className="row">
                            <h5 className="col-6 text-left text-secondary">Opportunity type</h5>
                            <div className="col-6 text-right dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Target annual salary</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Target hourly rate</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Willing to relocate</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Willing to travel</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Most important</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Seniority</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5" id="rightcontainer">
                            <h5 className="text-left">Expectations regarding employers</h5>
                            <div className="row">
                            <h5 className="col-6 text-left text-secondary">Ideal location</h5>
                            <div className="col-6 text-right dropdown ">
                            <input class="form-control form-control-sm" type="text" placeholder="Type to search" id = "btn-option"></input>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Government jobs</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Industries</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Data Culture</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            <h5 className="col-6 text-left text-secondary">Preferred Company Size</h5>
                            <div className="col-6 text-right dropdown ">
                                <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" id = "btn-option">Choose</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Right;