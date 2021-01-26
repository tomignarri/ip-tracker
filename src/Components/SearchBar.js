import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{


    constructor(){
        super();
        
     }

    onSearchSubmit = () => {
        console.log("SUBMITING");
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        
        const headers = {
            'apiKey': 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY',
            'ipAddress': '8.8.8.8',
        }

        fetch(proxyurl + 'https://geo.ipify.org/api/v1?', { headers })
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