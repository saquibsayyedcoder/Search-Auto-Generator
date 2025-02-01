import React from 'react'
import "./App.css";
import SearchBar from './components/SearchBar';


const App = () => {
  return (
   <>
   <div className='App'>
    <div className="search-bar-container">
    <SearchBar/>
      <div>SearchResults</div>

    </div>

   </div>
   </>
  )
}

export default App