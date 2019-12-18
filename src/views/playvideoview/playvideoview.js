import React, { Component } from 'react';
import Playanvideo from '../../components/playanvideo/playanvideo'
import Header from '../../container/header/header';
import './playvideoview.scss';
import Container from '../../container/container/container'

export default class Playvideoview extends Component {
    render() {
        return (
            <div className="playvideo">
                <Container >
                    {/* <Header/> */}
                        {/* <Maincontent> */}
                            
                            <Playanvideo />
                        {/* </Maincontent> */}
                    {/* <Footer/> */}
                 </Container>
            </div>
        )
    }
}
