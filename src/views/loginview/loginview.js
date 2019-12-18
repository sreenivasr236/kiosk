import React, { Component } from 'react';
import Header from '../../container/header/header';
import Footer from '../../container/footer/footer';
import Maincontent from '../../container/maincontent/maincontent';
import Container from '../../container/container/container'
import Login from '../../components/login/login';
import Logo from '../../Assests/Images/Logo.png'
import '../loginview/loginview.scss';
export default class Loginview extends Component {
    constructor(props){
        super(props)
       
    }
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
                            <Login/>
                        </Maincontent>
                    {/* <Footer/> */}
                 </Container>
            </div>
        )
    }
}
