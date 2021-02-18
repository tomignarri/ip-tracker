import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{


    constructor(){
        super();
        
     }

    onSearchSubmit = () => {
        console.log("SUBMITING");
        
        
        const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
        const ipAddress = '8.8.8.8';
     

        fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddress)
        .then(async response => {
            const data = await response.json();
            console.log(data);
        })
        .catch(error => {

        });
    }

    render(){
        return(
            <div className="searchBar">
                
                <input className="searchTextInput" type="text">

                </input>
                <button className="submitButton" onClick={() => this.onSearchSubmit()}>Search</button>
                
            </div>
        )
    }
}

export default SearchBar;