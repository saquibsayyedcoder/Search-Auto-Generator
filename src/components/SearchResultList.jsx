import React from 'react'
import "./SearchResult.css";
import { SearchResult} from './SearchResult'
const SearchResultList = ({results}) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id)=>{
          return <div key={(id)}>{result.name}</div>
        })
      }

    </div>
  )
}

export default SearchResultList