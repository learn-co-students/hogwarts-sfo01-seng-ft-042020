import React from 'react';
import Hog from './Hog';


const HogContainer = ({ hogs, handleHiddenHogs }) => {
  return ( 
    <div className='ui grid container'> 
      { hogs.map(hog => <Hog key={hog.name}hog={hog} />) }
    </div>
   );
}
 
export default HogContainer;