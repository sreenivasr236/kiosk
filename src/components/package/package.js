import React, { Component } from 'react'
import Card from '../card/card';
import './package.scss';
import {withRouter} from 'react-router-dom';
class Package extends Component {

     goBack=()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="packages">
                <h3>Sedan Car Cleaning Packages <span onClick={this.goBack}>Change Car Type</span></h3>
                
                <Card/>
                
            </div>
        )
    }
}
export default withRouter(Package);
