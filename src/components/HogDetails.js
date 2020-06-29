import React from 'react'

const HogDetails = ({ hog }) => {
  return (
    <div>
      <h3>Specialty: {hog.specialty}</h3>
      <span>Weight: {hog.weight}</span>
      {hog.greased === true ? <p>{hog.name} is greased</p> : <p>{hog.name} is not greased</p>}
      <span>Highest Medal Achieved: {hog["highest medal achieved"]}</span>
    </div>
  )
}

export default HogDetails
