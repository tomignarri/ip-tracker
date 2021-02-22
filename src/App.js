import MapView from './Components/MapView'
import SearchBar from './Components/SearchBar'
import React, {useReducer} from 'react';
import './App.css';

export const ipAddressContext = React.createContext();

// Set up Initial State
const initialState = {

  ipAddress: '',
  location: '',

};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return {
              inputText: action.data
          };


      default:
          return initialState;
  }
};

function App() {
  
  
  const [state, dispatch] = useReducer(reducer, initialState);

  
  
  return (
    <div className="App">
      <ipAddressContext.Provider>
        <SearchBar></SearchBar>
        <MapView></MapView>
      </ipAddressContext.Provider>
        
    </div>
  );
  
};

export default App;
