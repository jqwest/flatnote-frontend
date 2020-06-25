import React from 'react'

function SearchBar(props) {
    return (
        <div className="search-bar">
            <select>
                <option>Name</option>
                <option>Date</option>
                <option>Tags</option>
            </select>
            <input onChange={props.handleChange} value={props.searchTerm} placeholder="🔍 Search Notes"/>
        </div>
    )
}

export default SearchBar
