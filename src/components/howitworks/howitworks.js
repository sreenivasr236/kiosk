import React, { Component } from 'react'
import Icon1 from'../../Assests/Images/icon1.png';
import Icon2 from'../../Assests/Images/icon2.png';
import Icon3 from'../../Assests/Images/icon3.png';
import Icon4 from'../../Assests/Images/icon4.png';
import './howitworks.scss'
export default class Howitworks extends Component {
    state={
        steps:[
            {
                title:'Book a service',
                des:'Quickly create a booking using this service service kiosk',
                url:Icon1
            },
            {
                title:'Drop your keys',
                des:'On booking, just handover your keys to the person at the counter next to you.',
                url:Icon2
            },
            {
                title:'Get notified',
                des:'We send regular updates with the status of your car. You will receive a notification once your car is ready.',
                url:Icon3
            },
            {
                title:'Visit counter to collect keys',
                des:'Collect your keys at the BodyCoat counter located on ground floor next to Haagen Dazs. Pay by Cash or Card.',
                url:Icon4
            },
        ]
    }
    render() {
        return (
            <div className="how-it-works">
                <div className="content">
                <h3>How it works?</h3>
                {this.state.steps.map((step, index) => 
                <div className="card">
                    <div className="logo">
                        <img src={step.url} />
                    </div>
                    <div className="card-desc">
                        <p className="title" >{step.title}</p>
                        <p className="desc">{step.des}</p>
                    </div>
                </div>
                )}
                </div>
            </div>
        )
    }
}
