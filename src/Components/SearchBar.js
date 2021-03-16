import React, { useContext, useState } from "react";
import '../App.css';

import { ipAddressContext } from '../App'
import LoadingIcon from "./LoadingIcon";


function SearchBar(){

    const {state, dispatch} = useContext(ipAddressContext);

    const [isLoading, setIsLoading] = useState(false); 

    const onSearchSubmit = (ipAddressQuery) => {
        console.log("SUBMITING", ipAddressQuery);
        
        setIsLoading(true);
        
        const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        
        fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddressQuery,{
            
        })
        .then(async response => {
            const data = await response.json();
            dispatch({ type: 'UPDATE_LOCATION', data: data});
            setIsLoading(false);
            console.log("data!!!", data);
            console.log("loading!!!", isLoading);
           
        })
        .catch(error => {
            console.log(error)
        });
        
    }

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