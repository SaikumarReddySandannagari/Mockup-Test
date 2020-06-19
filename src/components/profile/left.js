import React, { Component } from "react";
import './profile.css'
import data from "../data.json"

class Left extends Component {
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
  render() {
    return (
    <div className="container">
    <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src="https://i.ibb.co/Q87hQF2/Beauty-Plus-20180206225759-save.jpg"
            alt="User"/>
        </div>
        <div class="user-info">
          <span class="user-name">{this.state.firstname}
          </span><br/>
          <span class="user-name">{this.state.lastname}</span>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul >
          <li class="sidebar-dropdown">
          <li>
              <i class="fa fa-book"></i>
              <span>Profile</span>
          </li>
          <li>
              <i class="fa fa-calendar"></i>
              <span>Dashboard</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>Resume builder</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>Community</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>Resources</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>FAQ</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>Contact</span>
          </li>
          <li>
              <i class="fa fa-folder"></i>
              <span>Referral Program</span>
          </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
    );
  }
}

export default Left;