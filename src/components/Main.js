import React, { Component } from "react";
import { Route } from "react-router-dom";
import profile from "./profile/profile"
import editProfile from "./profile/edit"
import './profile/profile.css'

class Main extends Component{
    render(){
        return(
            <div className="App" style={{backgroundColor:"#383838", height:"850px"}}>
                <Route exact path="/" component={profile} />
                <Route path="/editProfile" component={editProfile}/>
            </div>
        )
    }
}

export default Main;