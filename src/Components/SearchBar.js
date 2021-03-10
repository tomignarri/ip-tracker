import React, { useContext } from "react";
import '../App.css';

import { ipAddressContext } from '../App'


function SearchBar(props){

    const {state, dispatch} = useContext(ipAddressContext);

    //const changeInputValue = (newValue) => {
    //    dispatch({ type: 'UPDATE_INPUT', data: newValue});
    //};


    const onSearchSubmit = (ipAddressQuery) => {
        console.log("SUBMITING", ipAddressQuery);
        
        const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        
        fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddressQuery,{
            
        })
        .then(async response => {
            const data = await response.json();
           
            dispatch({ type: 'UPDATE_LOCATION', data: data});
            
            console.log("data!!!", data);
            console.log("coordinates!!!", state.locationCoordinates);
            //dispatch happens here
        })
        .catch(error => {
            console.log(error)
        });
        //return state.location
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
                <button type="button" onClick={e => onSearchSubmit(document.getElementById('searchContent').value)}>Search</button> 
            </form>  
            
        </div>
    )
    
}

export default SearchBar;