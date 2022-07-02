import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  // const name= useGlobalContext();
  const {query,searchPost} = useGlobalContext();


  return (
    <>
       <h1>Tech News Website</h1>
       <form action="">
        <div>
          <input type="text" placeholder="search here"  value={query} onChange={(e)=> searchPost(e.target.value)}
          
          />
        </div>
       </form>
    </>
  )
}

export default Search