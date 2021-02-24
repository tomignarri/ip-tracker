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
        console.log("SUBMITING", ipAddressQuery);
        
        const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        
        fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddressQuery)
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

            <form>
                <input 
                    className="searchTextInput" 
                    id="searchContent"
                    type="text"
                    placeholder="Search..">
                </input>
                <button type="submit" onClick={e => onSearchSubmit(document.getElementById('searchContent').value)}>Search</button> 
            </form>  
            
        </div>
    )
    
}

export default SearchBar;