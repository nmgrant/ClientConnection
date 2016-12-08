import React from 'react';
import { withGoogleMap } from "react-google-maps";
import { GoogleMap } from "react-google-maps";

export const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 33.7838, lng: -118.1141 }}
    onClick={props.onMapClick}
    options={{
      disableDefaultUI: true
    }}
  >
  </GoogleMap>
));