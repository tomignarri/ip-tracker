import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{

    onSearchSubmit = () => {
        const headers = {
            'apiKey': 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY',
            'ipAddress': '8.8.8.8',
        }

        fetch('https://geo.ipify.org/api/v1?', { headers })
        .then(async response => {
            const data = await response.json();
            console.log(data);
        })
        .catch(error => {

        });
    }

    render(){
        return(
            <div class="searchBar">
                
                <div class="searchTextInput">Enter Text</div>
                <div class="submitButton">Submit</div>
            </div>
        )
    }
}

export default SearchBar;