import React, { Component } from 'react'
import './info.scss';
import Infoicon from'../../Assests/Images/info.png'
export default class Info extends Component {
    render() {
        return (
            <div className="info">
               <img  src={Infoicon} onClick={this.props.click} />
            </div>
        )
    }
}
