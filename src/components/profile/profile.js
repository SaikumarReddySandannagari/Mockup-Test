import React, { Component } from 'react';
import './profile.css'
import Left from './left';
import Right from './right';

class Profile extends Component {
    render(){
  return (
    <div className='row'>
      <div className='col-sm-3' id='left'>
        <Left/>
      </div>
      <div className='col-sm-9' id='right'>
        <Right/>
      </div>
    </div>
  );
}
}

export default Profile;