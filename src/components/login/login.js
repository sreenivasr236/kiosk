import React, { Component } from 'react'
import {connect} from 'react-redux';
import { login } from '../../actions';
import {withRouter} from 'react-router-dom';
// import Logo from '../../Assests/Images/Logo.png'
import './login.scss'
 class Login extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        this.state={
            id:'',
            pin:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateId=(event)=>{
        this.setState({
            id:event.target.value
        })
    }
    updatePin=(event)=>{
        this.setState({
            pin:event.target.value
        })
    }


    handleSubmit(event) {
        
        event.preventDefault();
        this.props.handleSubmit(this.state);
        alert('Data submitted: ' + this.state.id + this.state.pin );
        console.log(this.props.history.push('/locationsearch'))
    }

     
    render() {
        return (
            <div className="login-form">
                {/* <img src={Logo}/> */}
                <h3>KIOSK SIGN IN</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="ID" className="input" type = "number" value = {this.state.id} onChange = {this.updateId} />
                        <input placeholder="PIN" className="input"  type = "password" value = {this.state.pin}  onChange = {this.updatePin} />
                        {/* <p>{this.props.children}{this.props.id}</p> */}
                        <input className="login-submit" type="submit" value="log in" />
                    </form>
            </div>
        )
    }
}
 const mapStateToProps=state=>{
     return{
        id: state.id,
        pin: state.pin, 
     }
 }
const mapDispatchToProps=dispatch=>{
    return{
        handleSubmit:(payload)=>dispatch(login(payload))
    }
}
 export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
 