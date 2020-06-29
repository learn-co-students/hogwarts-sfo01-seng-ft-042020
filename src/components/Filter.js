import React from 'react'

const Filter = ({ handleToggleGreased, displayGreased, handleSortHogs }) => {
  return (
    <div style={{margin: "20px"}}>
      <input
        name="displayGreased"
        type="checkbox"
        checked={displayGreased}
        onChange={handleToggleGreased}
      />
      <label> Toggle Greased</label>

      <select onChange={handleSortHogs}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Filter;
