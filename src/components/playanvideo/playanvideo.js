import React, { Component } from 'react';
import Button from '../button/button';
import ReactPlayer from 'react-player';
import './playvideo.scss';

import {withRouter} from 'react-router-dom';


 class Playanvideo extends Component {
    btnHandler=()=>{
        console.log(this.props.history.push('/howitworks'))
    }

    render() {
        return (
            <div className="player">
                <ReactPlayer url='https://www.youtube.com/watch?v=d46Azg3Pm4c' className='react-player'  controls={true} light={true} />
          
              
            {/* <img  onClick={this.playHandler} src={Play}></img>  */}
          
                <Button click={this.btnHandler} value="Tap anywhere to begin" /> 
            </div>
        )
    }
}
export default withRouter(Playanvideo);