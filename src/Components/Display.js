import React, { useContext } from "react";
import '../App.css';

import { ipAddressContext } from '../App'


function Display(props){

    const state = useContext(ipAddressContext);
    


    return(
        <div id="searchDisplay">
            <div className="displayBox">{"country" || state.locationData.country}</div>
            <div className="displayBox"></div>
            <div className="displayBox"></div>
            <div className="displayBox"></div>
        </div>
    )
    
}

export default Display;