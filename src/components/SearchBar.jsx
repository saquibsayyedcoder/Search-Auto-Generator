import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
const SearchBar = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholer.typicode.com/users")

    }
  return (
    <>
    <div className='input-wrapper'>
        <FaSearch id="search-icons"/>
        <input type="text" placeholder='Type to search....' value={input} onChange={(e)=>setInput(e.target.value)}/>


    </div>
    </>
  )
}

export default SearchBar