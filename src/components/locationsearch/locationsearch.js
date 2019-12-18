import React, { Component } from 'react';
import Button from '../button/button'
import {withRouter} from 'react-router-dom';
import './locationsearch.scss';
import {connect} from 'react-redux';
import { locationsearch } from '../../actions';
 class Locationsearch extends Component {
    constructor(props){
      
        super(props);
        this.state={
            select:'',
            buttonval:true
        }
        this.navtoplay = this.navtoplay.bind(this);
        
    }
    locationbuttonHandler=()=>{

    }
    selectHandler=(event)=>{
        this.setState({
            select:event.target.value,
            buttonval:false,
            
        })
     
    }
    navtoplay=()=>{
        
          console.log(this.props.history.push('/playvideo'));
          this.props.navtoplay(this.state);
    }
    render() {
        return (
            <div className="location-search">
                    <select onChange={this.selectHandler} value={this.state.value}>
                            <option value="">select location</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                    </select>
                    <Button value="next" click={this.locationbuttonHandler} click={this.navtoplay}  disabled={this.state.buttonval}/>

            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
       location: state.select,
    
    }
}
const mapDispatchToProps=dispatch=>{
   return{
    navtoplay:(payload)=>dispatch(locationsearch(payload))  
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Locationsearch));