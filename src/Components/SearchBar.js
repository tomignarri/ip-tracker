import React, { useContext, useState } from "react";
import '../App.css';

import { ipAddressContext } from '../App'
import LoadingIcon from "./LoadingIcon";
import LocationService, {onSearchSubmit, isLoading} from "../Services/LocationService"


function SearchBar(){


    
    //const {state, dispatch} = useContext(ipAddressContext);

    //const [isLoading, setIsLoading] = useState(false); 

    // const isValidIp = (ipAddressQuery) =>{
    //     var splitIp = ipAddressQuery.split(".");
    //     console.log("SPLIT IP  ", splitIp);
        
    //     if(splitIp.length !== 4){
    //         return false;
    //     }

    //     for(var i = 0; i < splitIp.length; i++){
    //         if(splitIp[i] > 255 || splitIp[i] < 0 || isNaN(splitIp[i])){
    //             return false;
    //         }
    //     };
    //     return true;
    // }
    

    // const onSearchSubmit = (ipAddressQuery) => {
    //     console.log("SUBMITING", ipAddressQuery);
        
    //     if(!isValidIp(ipAddressQuery)){
    //         alert("invalid ip address");
    //         return;
    //     }

    //     setIsLoading(true);

    //     const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        
    //     fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddressQuery,{
            
    //     })
    //     .then(async response => {
    //         const data = await response.json();
    //         dispatch({ type: 'UPDATE_LOCATION', data: data});
    //         setIsLoading(false);
    //         console.log("data!!!", data);
    //         console.log("loading!!!", isLoading);
    //         
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
        
    // }

    return(
        <div className="searchBar">

            <form>
                <input 
                    className="searchTextInput" 
                    id="searchContent"
                    type="text"
                    placeholder="Search..">
                </input>
                <button 
                    className="submitButton" 
                    type="button" 
                    onClick={e => onSearchSubmit(document.getElementById('searchContent').value)}>Search
                </button>
                {isLoading ? <LoadingIcon></LoadingIcon> : <div>found it </div>} 
            </form>  
            
        </div>
    )
    
}

export default SearchBar;