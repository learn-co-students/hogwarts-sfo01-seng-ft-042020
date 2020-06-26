import React from 'react';



class HogContainer extends React.Component {

  renderHogs = () => {
    return this.props.hogData.map((hog, index) => {
  
      let imageName = hog.name.toLowerCase().split(' ').join('_')
      let pigImage = require(`../hog-imgs/${imageName}.jpg`) 
      console.log(pigImage)
      return (
        <div key={index} className="card">
          <h2>{hog.name}</h2>
          <p>{hog['highest medal achieved']}</p>
          <p>{hog.weight}</p>
          <img alt="pig" src={pigImage}></img>
        </div>
        )
    })


  }

  render() {
    return (
      <div>
        {this.renderHogs()}
      </div>
    )
  }
  

}

export default HogContainer