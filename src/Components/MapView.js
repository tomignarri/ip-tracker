import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';


class MapView extends React.Component{

    constructor(){
       super();
       this.state = {
        currentLocation: { lat: 52.52437, lng: 13.41053 },
        zoom: 12,
      }
    }

    render(){
        return(


            <div>
               <MapContainer center={this.state.currentLocation} zoom={this.state.zoom} style={{height: 350}}></MapContainer>
            </div>



            
        )
    }
}

export default MapView;