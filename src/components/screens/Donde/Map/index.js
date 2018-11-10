import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const Target = ({text}) => (
    <div className='target'>
        {text}
    </div>
)
class Map extends Component {
    state = {
        def: {
            lat: -34.580222, 
            lng:-58.436085,
        },
        zoom: 13,
    }
    render() {
        const {def,zoom} = this.state;
        return (
            <GoogleMapReact
                defaultCenter= {def}
                defaultZoom= {zoom}
            >
                <Target lat={-34.580222} lng={-58.436085} text={'Fundacion SI'}/>
            </GoogleMapReact>
        )
    }
}
export default Map