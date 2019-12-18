import React, { Component } from 'react';


export default class Button extends Component {
    render() {
        return (
            <div className="button">
                <button style={this.props.style} disabled={this.props.disabled} value={this.props.value} onClick={this.props.click} className={this.props.class}>{this.props.value}</button>
            </div>
        )
    }
}
