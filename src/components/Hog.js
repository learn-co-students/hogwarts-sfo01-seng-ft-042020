import React, { Component } from 'react';
import HogDetails from './HogDetails'

class Hog extends Component {
  state = {
    detailsHidden: true
  }
  
  handleToggleDetails = () => {
    this.setState({ detailsHidden: !this.state.detailsHidden });
  };
  render() { 
    const { hog } = this.props
    const imgPath = require(`../hog-imgs/${hog.name.split(' ').join('_').toLowerCase()}.jpg`)
      return ( 
        <div className='ui eight wide column'>
          <div className='ui card'>
            <h1>{hog.name}</h1>
            <img src={imgPath} alt='hogs' />
            {this.state.detailsHidden === false && <HogDetails hog={hog}/>}
            {this.state.detailsHidden === true ? 
              <button className='ui button primary' onClick={this.handleToggleDetails}>Show Details</button> :
              <button className='ui button primary' onClick={this.handleToggleDetails}>Hide Details</button>
            }
          </div>
        </div>
     );
  }
}
 
export default Hog;

















// const Hog = ({ name, specialty, greased, weight, medal, handleClick, detailsHidden}) => {
//   let imgPath = name.toLowerCase().split(' ').join('_') + '.jpg'
//   return ( 
//     <div className='ui eight wide column'>
//       <br></br>
//       <h1>{name}</h1>
//       <img onClick={() => handleClick(name)} src={require(`../hog-imgs/${imgPath}`)} />
//       <h2>Specialty: {specialty}</h2>
//       {greased ? <p>Hog is greased</p> : <p>Hog is not greased</p>}
//       <p>Weight: {weight}</p>
//       <p>Medals: {medal}</p>
//     </div>
//    );
// }
 
// export default Hog;