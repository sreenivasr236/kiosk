import React, { Component } from 'react'
import '../chooseacar/chooseacar.scss';
import Icon1 from'../../Assests/Images/choose1.png';
import Icon2 from'../../Assests/Images/choose2.png';
import Icon3 from'../../Assests/Images/choose3.png';
export default class Chooseacar extends Component {
state={
choosecar:[
{
title:'Sedan',
model:'Verna, Swift Dzire, Honda City, Vento, Rapid, Corolla etc.',
url:Icon1,
id:1,
},
{
title:'SUV',
model:'Creta, Brezza, Ecosport, Fortuner, Innova, CRV, Venue, Compass etc.',
url:Icon2,
id:2
},
{
title:'Hatchback',
model:'Swift, Baleno, i10, i20, Brio, Ritz, Kwid, Polo, Tiago etc.',
url:Icon3,
id:3
},
]
}
render() {
return (
<div className="choose-a-car">
   <h3>What car do you have?</h3>
   <div className="choose-a-car-container">
      {this.state.choosecar.map((option, index) => 
      <div className="card">
         <input type="radio" name="rGroup" value="1" id={option.id} />
         <label className="checkbox-alias" htmlFor={option.id}>
            <img alt="hello" src={option.url}/>
            <h4>{option.title}</h4>
            <p>{option.model}</p>
         </label>
      </div>
      )}
   </div>
</div>
)
}
}