// import React ,{useEffect} from 'react'

import React,{useEffect} from 'react'
import {useGlobalContext} from './context'
import './App.css'


const Stories = () => {
  const {hits,isLoading,removePost}=useGlobalContext();



    // let isLoading = true;



    // if(isLoading){
    //     return(
    //         <>
    //         <h1>Loading....</h1>
    //       </>

    //     )
     
    // }
    

  return (
    <>
       <div className="stories-div">

     
       {hits.map((curPost)=>{
        const {title , author , objectID , url , num_comments}=curPost;
        return(
        <>
             <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By {author} | <span>{num_comments}</span> comments
              </p>
               <div className="card-buttton" style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                <a href={url} target="_blank" >
                  Read More
                </a>
                <a href="#" style={{color: "red"}} onClick={()=>removePost(objectID)}>Remove</a>
               </div>


             </div>

        </>
        
        );
       })}
         </div>
    </>
  )
}

export default Stories