import React, { Component } from 'react';
import Map from './Map'
class Donde extends Component {

    state = {

    }
    renderMap = () => (
        <Map/>
    )
    render() {
        return (
            <div className="google-map">
                {this.renderMap()}
            </div>
        );
    }
}

export default Donde;
