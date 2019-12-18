import React, { Component } from 'react';
import Info from '../info/info';
import './card.scss';
import Button from '../button/button';
import Popup from '../popup/popup'

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { cardadd } from '../../actions';
import { cardremove } from '../../actions';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnadd: 'add',
            btnremove: 'remove',
            status: false,
            prize:0,

            packages: [
                {
                    id: 1,
                    title: 'Complete Car Cleaning',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹1999"

                },
                {
                    id: 2,
                    title: 'Interior Car Cleaning',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹1299 "


                },
                {
                    id: 3,
                    title: 'Interior Car Polishing',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹3999 "

                },
                {
                    id: 4,
                    title: 'Basic Car Wash',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹999 "

                },
                {
                    id: 5,
                    title: 'Deep Car Wash',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹1499"

                },
                {
                    id: 6,
                    title: 'Exterior Car Cleaning',
                    des: '- Interior cleaning with shampoo - Exterior car detailing - Vacuum cleaning & dashboard polishing',
                    price: "₹1599"

                },
            ]
        }
       
      
    }


    render() {
    
        
        return (
            <div className="package-card">
                {this.state.packages.map((packages, index) =>
                    <div className="product" style={{background: localStorage.getItem(`_item${packages.id}`) == null || localStorage.getItem(`_item${packages.id}`) == 'null' || localStorage.getItem(`_item${packages.id}`) == 1 ? '' : 'linear-gradient(180deg, #F0622E 0%, #EE2B4E 100%) 0% 0%'}}  >
                       
                        <h4>{packages.title}</h4>
                        <Info click={this.infoHandler}/>
                        <p>{packages.des}</p>
                        <span>{packages.price}</span>

                        <Button  class="addto-card" value={this.state.btnadd} click={this.props.add}/>
                        <Button  class="addto-card" value={this.state.btnremove} click={this.props.remove}  />
                    </div>
                )}

                    <p className="tha">{this.state.prize}</p>
                {this.state.status ? <Popup /> : null}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        package: state.package,
    
    }
}
const mapDispatchToProps=dispatch=>{
   return{
    add:()=>dispatch(cardadd()) ,
    remove:()=>dispatch(cardremove()) 
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Card));