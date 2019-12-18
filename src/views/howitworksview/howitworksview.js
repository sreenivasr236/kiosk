import React, { Component } from 'react'
import Header from '../../container/header/header';
import Footer from '../../container/footer/footer';
import Maincontent from '../../container/maincontent/maincontent';
import Container from '../../container/container/container';
import Howitworks from '../../components/howitworks/howitworks'
export default class Howitworksview extends Component {
    abcHandler=()=>{
        console.log(this.props.history.push('/chooseacar'))
    }
    render() {
        return (
            <div className="how-it-works">
                <Container color="#F6F6F6">
                    <Header>

                    </Header>   
                    <Maincontent>
                        <Howitworks/>
                    </Maincontent>
                    <Footer value="Start Booking" click={this.abcHandler}>
                              
                    </Footer>
                </Container>
            </div>
        )
    }
}
