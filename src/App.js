
import './App.css';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
// import React ,{useContext} from 'react'
// import {AppContext} from './context' now instead of two we can write once by creating custom hook
// import {useGlobalContext} from "./context"


function App() {
  // const data=useContext(AppContext);
  // const data=useGlobalContext();
  return (
    <div className="App">
      {/* Welcom to MyNews */}
      <div>Welcome to my News App</div>
      <Search/>
      <Pagination/>
      <Stories/>

    </div>
  );
}

export default App;
