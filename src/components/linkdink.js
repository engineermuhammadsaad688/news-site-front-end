import './linkdink.css'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Linkdink9 from './linkdink9';
import Linkdink10 from './linkdink10';


<FaAngleRight />
function Linkdink() {

  const [activeItem, setActiveItem] = useState('in');
  const [showSmallImage, setShowSmallImage] = useState(false);

  const toggleSmallImage = () => {
    setShowSmallImage(!showSmallImage);
  };
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div className='main-container-top'>
<Linkdink9/>
<Linkdink10/>

      </div>

      );
}

      export default Linkdink;