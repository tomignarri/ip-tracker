import MapView from './Components/MapView'
import SearchBar from './Components/SearchBar'
import React from 'react';
import './App.css';

const ipAddressContext = React.createContext();

// Set up Initial State
const initialState = {

  inputText: '',

};

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <ipAddressContext.Provider>
          <SearchBar></SearchBar>
          <MapView></MapView>
        </ipAddressContext.Provider>
        
        
      </div>
    );
  }
}

export default App;
