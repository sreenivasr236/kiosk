import React, { Component } from 'react';
import './container.scss'
export default class Container extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container" style={{backgroundColor:this.props.color}}>
                 {this.props.children}
            </div>
        )
    }
}
