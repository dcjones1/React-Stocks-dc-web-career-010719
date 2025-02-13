import React from 'react';

const SearchBar = (props) => {
  console.log(props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === 'Alphabetically'} onChange={props.sortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === 'Price'} onChange={props.sortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterChange} value={props.filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
