// context  creation 
// provider  
// consumer   lengthy process so removed it
//so now we use usecontexthook
import React, { useContext,useReducer,useEffect } from 'react';
import reducer from './reducer';



let API = "https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading:true,
    query:"HTML",
    nbPages:0,
    page:0,
    hits:[],
};


const AppContext = React.createContext();

// TO create a provider function

const AppProvider = ({ children }) => {
    // we will be using usereducer instead of usestate to manage state  
    // const [state,setstate]=useState(initialState);

    const [state,dispatch] = useReducer(reducer,initialState);


    const fetchApiData= async(url)=>{
        dispatch({type: "SET_LOADING"})


        try {
            const res= await fetch(url);
            const data=await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            
            })
            // isLoading=false;
        } catch (error) {
            console.log(error);
        }
    }

    // to remove the post

    const removePost=(post_ID)=>{
        dispatch({type: 'REMOVE_POST', payload: post_ID})
    }


    useEffect(() => {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [])


    return <AppContext.Provider value={{...state,removePost}}>{children}</AppContext.Provider>

}

// Custoom hook creation
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider , useGlobalContext}



