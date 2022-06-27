// context  creation 
// provider  
// consumer   lengthy process so removed it
//so now we use usecontexthook
import React, { useContext } from 'react';
const AppContext = React.createContext();

// TO create a provider function

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={"Aniket Dhokane"}>{children}</AppContext.Provider>

}

// Custoom hook creation
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider , useGlobalContext}



