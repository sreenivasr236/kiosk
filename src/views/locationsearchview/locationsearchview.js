import React, { Component } from 'react'
import Header from '../../container/header/header';
import Footer from '../../container/footer/footer';
import Maincontent from '../../container/maincontent/maincontent';
import Container from '../../container/container/container';
import Locationsearch from '../../components/locationsearch/locationsearch';
import Logo from '../../Assests/Images/Logo.png'
export default class Locationsearchview extends Component {
    
    render() {
        return (
            <div className="login">
                <Container >
                    {/* <Header> */}
                    <div className="logo-container">
                          <img src={Logo}/>
                    </div>
                    {/* </Header> */}
                        <Maincontent>
                          
                            <Locationsearch/>
                        </Maincontent>
                    {/* <Footer/> */}
                 </Container>
            </div>
        )
    }
}
