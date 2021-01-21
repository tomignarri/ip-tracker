import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{
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