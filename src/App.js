import MapView from './Components/MapView'
import SearchBar from './Components/SearchBar'
import Display from './Components/Display';
import React, {useReducer} from 'react';
import './App.css';

export const ipAddressContext = React.createContext();

const initialState = {
  ipAddress: '',
  locationCoordinates: { lat: 58.52437, lng: 13.41053 },
  locationData: '',
  isp: '',
  timezone: '',
  loadingIcon: false,
};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_LOCATION':
          return {
              timezone: action.data.location.timezone,
              isp: action.data.isp,
              ipAddress: action.data.ip,
              locationData: action.data.location,
              locationCoordinates:{lat: action.data.location.lat, lng: action.data.location.lng},
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
        <div className="uiDisplay">
          <SearchBar></SearchBar>
          <Display></Display>
        </div>
        <MapView></MapView>
      </ipAddressContext.Provider>
        
    </div>
  );
  
};

export default App;
