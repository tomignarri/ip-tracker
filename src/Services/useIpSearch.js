import React, { useContext, useState, useEffect } from "react";
import { ipAddressContext } from '../App'





    const isValidIp = (ipAddressQuery) =>{
       
        var splitIp = ipAddressQuery.split(".");
        console.log("SPLIT IP  ", splitIp);
        
        if(splitIp.length !== 4){
            return false;
        }

        for(var i = 0; i < splitIp.length; i++){
            if(splitIp[i] > 255 || splitIp[i] < 0 || isNaN(splitIp[i])){
                return false;
            }
        };
        return true;
    }

    const useIpSearch = (ipAddressQuery) => {
        
        useEffect(() => {
            const OnSearchSubmit = (ipAddressQuery) => {

                console.log("SUBMITING", ipAddressQuery);
                const {state, dispatch} = useContext(ipAddressContext);
                const [isLoading, setIsLoading] = useState(false); 
                
                if(!isValidIp(ipAddressQuery)){
                    alert("invalid ip address");
                    return;
                }
        
                setIsLoading(true);
        
                const apiKey = 'at_SGVjuwbf6VmSgiEm49I9lxFY1Q0FY';
                
                fetch('https://geo.ipify.org/api/v1?apiKey=' + apiKey + '&ipAddress=' + ipAddressQuery,{
                    
                })
                .then(async response => {
                    const data = await response.json();
                    dispatch({ type: 'UPDATE_LOCATION', data: data});
                    setIsLoading(false);
                    console.log("data!!!", data);
                    console.log("loading!!!", isLoading);
                
                })
                .catch(error => {
                    console.log(error)
                });
        
            }
            OnSearchSubmit(ipAddressQuery);
        }, []);
    
    };
    


export default useIpSearch;