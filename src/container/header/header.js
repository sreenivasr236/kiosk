import React, { Component } from 'react';
import './header.scss';
import Logo from '../../Assests/Images/Logo-kiosk.png';
import Help from '../../Assests/Images/help.png';
export default class Header extends Component {
constructor(props){
super(props);
}
render() {
return (
<section className="header">
   {this.props.children}
   <div className="header-conatiner">
      <div className="logo">
         <img  src={Logo}/>
      </div>
      <div className="help">
         <div className="help-logo">  <img src={Help}/></div>
         <div className="help-info">
            <span className="help-text">HERE TO HELP</span>
            <span className="help-mob">80808 12345</span>
         </div>
      </div>
   </div>
</section>
)
}
}