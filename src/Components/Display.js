import React, { useContext } from "react";
import '../App.css';

import { ipAddressContext } from '../App'


function Display(props){

    const {state, dispatch} = useContext(ipAddressContext);
    


    return(
        <div id="searchDisplay">
            <div className="displayBox">
                <h4>IP Address</h4>
                <p>
                    {state.ipAddress}
                </p>
            </div>
            <div className="displayBox">
                <h4>Location</h4>
                <p>
                    {state.locationData.city}
                    {state.locationData.region}
                    {state.locationData.country}
                </p>
            </div>
            <div className="displayBox">
                <h4>Timezone</h4>
                <p>
                    {state.timezone}
                </p>
            </div>
            <div className="displayBox">
                <h4>ISP</h4>
                <p>
                    {state.isp}
                </p>
            </div>
        </div>
    )
    
}

export default Display;