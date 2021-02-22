import React, { useContext } from "react";
import '../App.css';
import ReactDOM from 'react-dom';

import { ipAddressContext } from '../App'


function SearchBar(props){

    const {state, dispatch} = useContext(ipAddressContext);

    const changeInputValue = (newValue) => {
        dispatch({ type: 'UPDATE_INPUT', data: newValue});
    };


    const onSearchSubmit = (ipAddressQuery) => {
        console.log("SUBMITING");
        
        const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        const ipAddress = '8.8.8.8';

        fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + state.ipAddress)
        .then(async response => {
            const data = await response.json();
            console.log(data);
        })
        .catch(error => {

        });
        //return state.location
    }

    return(
        <div className="searchBar">
                
            <input 
                className="searchTextInput" 
                type="text" 
                onChange={e => onSearchSubmit(e.target.value)}>
            </input>
               
        </div>
    )
    
}

export default SearchBar;