import React, { useContext } from "react";
import '../App.css';

import { ipAddressContext } from '../App'


function Display(props){

    const {state, dispatch} = useContext(ipAddressContext);
    


    return(
        <div id="searchDisplay">
            <div className="displayBox">{state.locationData.country}</div>
            <div className="displayBox">{state.locationCoordinates.lat}{state.locationCoordinates.lng}</div>
            <div className="displayBox"></div>
            <div className="displayBox"></div>
        </div>
    )
    
}

export default Display;