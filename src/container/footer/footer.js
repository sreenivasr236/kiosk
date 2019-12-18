import React, { Component } from 'react'
import './footer.scss';
import Button from '../../components/button/button'
export default class Footer extends Component {

    render() {
        return (
            <section className="footer">
                    <Button value={this.props.value} click={this.props.click}/>
            </section>
        )
    }
}
