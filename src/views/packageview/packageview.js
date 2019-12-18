import React, { Component } from 'react'
import Header from '../../container/header/header';
import Footer from '../../container/footer/footer';
import Maincontent from '../../container/maincontent/maincontent';
import Container from '../../container/container/container';
import Package from '../../components/package/package';

export default class Packageview extends Component {
    optionHandler=()=>{
      alert();
    }
    render() {
        return (
            <div className="how-it-works">
                <Container color="#F6F6F6">
                    <Header>

                    </Header>   
                    <Maincontent>
                        <Package/>
                    </Maincontent>
                    <Footer value="Continue" click={this.optionHandler}>
                              
                    </Footer>
                </Container>
            </div>
        )
    }
}
