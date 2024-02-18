import React from 'react'
import SearchBox from '../Navbar/SearchBox'
import "./Search.css"

function Search() {
  return (
    <div className='search'>
        <h2 className='search-heading'>Search</h2>
        <SearchBox source="page-search-container"/>
    </div>
  )
}

export default Search