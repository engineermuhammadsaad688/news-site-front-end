import { Link } from 'react-router-dom';
import './linkdink1.css'
import React, { useState } from 'react';
import Linkdink2 from './linkdink2';
import Linkdink3 from './linkdink3';
import Linkdink7 from './linkdink7';



function Linkdink1() {
  const [activeItem, setActiveItem] = useState(['']);
  const [showSmallImage, setShowSmallImage] = useState(false);

  const toggleSmallImage = () => {
    setShowSmallImage(!showSmallImage);
  };
  return (
    <div className='value-main-container'>
 <Linkdink7/>

      <div className='layout-container'>
 <Linkdink3/>

<Linkdink2/>
      </div>
    </div>
  );
}

export default Linkdink1;