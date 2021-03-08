import MapView from './Components/MapView'
import SearchBar from './Components/SearchBar'
import React, {useReducer} from 'react';
import './App.css';

export const ipAddressContext = React.createContext();

// Set up Initial State
const initialState = {

  ipAddress: '',
  locationCoordinates: { lat: 58.52437, lng: 13.41053 },
  locationData: '',

};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_LOCATION':
          return {
              locationData: action.data,
              locationCoordinates:{lat: action.data.lat, lng: action.data.lng},
          };


      default:
          return initialState;
  }
};

function App() {
  
  
  const [state, dispatch] = useReducer(reducer, initialState);

  
  
  return (
    <div className="App">
      <ipAddressContext.Provider value={{ state, dispatch }}>
        <SearchBar></SearchBar>
        <MapView></MapView>
      </ipAddressContext.Provider>
        
    </div>
  );
  
};

export default App;
