import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
  lat: 18.9894,
  lng: 73.1175
};

class MyMapComponent extends Component {
  render() {
    return (
    <div>
          <LoadScript
        googleMapsApiKey="AIzaSyC3XMAZZOp2uICOtmO11DtTvjEiwLsYqOE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          
        </GoogleMap>
      </LoadScript>
    </div>
    )
  }
}

export default MyMapComponent;