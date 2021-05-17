import React, { useContext, useState } from "react";
import '../App.css';

import { ipAddressContext } from '../App'
import LoadingIcon from "./LoadingIcon";
import useIpSearch from "../Services/useIpSearch"


function SearchBar(){      
   

    //const { OnSearchSubmit, isLoading } = useIpSearch();

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
                    onClick={e => useIpSearch(document.getElementById('searchContent').value)}>Search
                </button>
                {isLoading ? <LoadingIcon></LoadingIcon> : <div>found it </div>} 
            </form>  
            
        </div>
    )
    
}

export default SearchBar;