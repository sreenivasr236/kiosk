import React, { Component } from 'react';
import './maincontent.scss'

export default class Maincontent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="maincontent">
  {this.props.children}
            </section>
        )
    }
}
