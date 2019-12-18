import React, { Component } from 'react'
import Header from '../../container/header/header';
import Footer from '../../container/footer/footer';
import Maincontent from '../../container/maincontent/maincontent';
import Container from '../../container/container/container';
import Chooseacar from '../../components/chooseacar/chooseacar'
export default class Howitworksview extends Component {
    optionHandler=()=>{
        console.log(this.props.history.push('/package'))
    }
    render() {
        return (
            <div className="how-it-works">
                <Container color="#F6F6F6">
                    <Header>

                    </Header>   
                    <Maincontent>
                        <Chooseacar/>
                    </Maincontent>
                    <Footer value="Continue" click={this.optionHandler}>
                              
                    </Footer>
                </Container>
            </div>
        )
    }
}
