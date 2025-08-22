import { Link } from 'react-router-dom';
import './airbanbCloneProject.css'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';



function AirbanbCloneProject() {
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className='header-top'>
                <div className='header-logo-container'>
                    <div className='logo-wrapper'>
                        <img src='images/logo-red.png' alt='profile picture' />
                    </div>
                </div>
                <div className='header-navigation'>
                    <Link to="/airhome" className='nav-item'>Popular Places</Link>
                    <Link to="/" className='nav-item'>Travel Outside</Link>
                    <Link to="/Airbanb" className='nav-item'>Online Packages</Link>
                </div>
                <div className='header-register'>
                    <Link to="/CalculatorMain" className='header-register'>Register Now</Link>


                </div>
            </div>
            <div className='second-component'>
                <div className='second-component-first'>
                    <div className='second-component-first-first'>
                        <div className='second-component-first-first-first'>
                            200+ Options

                        </div>
                        <div className='second-component-first-first-second'>
                            Recommended Places In San Francisco
                        </div>
                    </div>
                    <div className='second-component-first-second'>
                        <div className='second-component-first-second'>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s1.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco</div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
                                        <div>2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s2.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco</div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
                                        2 guests
                                        <div>

                                            $ 100 /day
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s3.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>

                                        <div>2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s4.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>

                                        <div>2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s5.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
                                        <div>2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/image-s6.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end'
                                    }}>
                                        <div>
                                            2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/thumbnail7.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end'
                                    }}>
                                        <div>
                                            2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/thumbnail4.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end'
                                    }}>
                                        <div>
                                            2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='second-component-first-second-first'>
                                <div className='second-component-first-second-first-first'>
                                    <img src='images/thumbnail6.png' alt='profile picture' />
                                </div>
                                <div className='second-component-first-second-first-second'>
                                    <div>Private Villa in San Francisco

                                    </div>
                                    <div style={{ fontWeight: "500", fontSize: "20px" }}>
                                        Deluxe Queen Room with Street View
                                    </div>
                                    <div>
                                        1 bedroom / 1 bathroom / Wifi / Kitchen
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaStar color="red" size={20} />
                                        <FaRegStar color="red" size={20} />
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end'
                                    }}>
                                        <div>
                                            2 guests
                                        </div>
                                        <div>
                                            $ 100 /day
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='second-component-second'>
                    <div className='second-component-second-first'>
                        <div className='second-component-second-first-first'>
                            <div className='second-component-second-first-first-first'>
                                Applied Filters
                            </div>
                            <div className='second-component-second-first-first-second'>
                                CLEAR
                            </div>
                        </div>
                        <div className='second-component-second-first-second'>
                            <div className='second-component-second-first-second-first'>
                                Villa
                            </div>
                            <div className='second-component-second-first-second-second'>
                                Select Filters
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='second-component-second-first-third'>
                            <div className='second-component-second-first-third-first'>
                                <div className='second-component-second-first-third-first-first'>
                                    Best For Americans
                                </div>
                                <div className='second-component-second-first-third-first-second'>
                                    <div className='second-component-second-first-third-first-second-first'>
                                        <div className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <div className='container-top'>
                                            Shopping Malls
                                        </div>
                                        <div className='level'>
                                            (0)

                                        </div>
                                    </div>
                                    <div className='second-component-second-first-third-first-second-second'>
                                        <div className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <div className='container'>
                                            Near Mountains
                                        </div>
                                        <div className='level'>
                                            (0)

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='second-component-second-first-third-second'>
                                <div className='second-component-second-first-third-first'>
                                    <div className='second-component-second-first-third-first-first'>
                                        Best For Americans
                                    </div>
                                    <div className='second-component-second-first-third-first-second'>
                                        <div className='second-component-second-first-third-first-second-first'>
                                            <div className="checkbox-container">
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={handleCheckboxChange}
                                                />
                                            </div>
                                            <div className='container-top'>
                                                Shopping Malls
                                            </div>
                                            <div className='level'>
                                                (0)

                                            </div>
                                        </div>
                                        <div className='second-component-second-first-third-first-second-second'>
                                            <div className="checkbox-container">
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={handleCheckboxChange}
                                                />
                                            </div>
                                            <div className='container'>
                                                Near Mountains
                                            </div>
                                            <div className='level'>
                                                (0)

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            <div className='second-component-first-second-second'>
                <div className='second-component-first-second-second-first'>
                    <div className='second-component-first-second-second-first-first'>
                        <img src='images/arrow.png' alt='profile picture' />
                    </div>
                    <div className='second-component-first-second-second-first-second'>
                        <div className='second-component-first-second-second-first-second-first'>
                            <MdKeyboardArrowLeft />

                            1


                        </div>
                        <div className='second-component-first-second-second-second'>
                            2
                        </div>
                        <div className='second-component-first-second-second-third'>
                            3
                        </div>
                        <div className='second-component-first-second-second-fourth'>
                            4
                        </div>
                        <div className='second-component-first-second-second-fifth'>
                            5
                            <MdKeyboardArrowRight />

                        </div>
                    </div>
                </div>


            </div>
            <div className='third-component'>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <div class="footer">
            </div>

        </>




    );
}

export default AirbanbCloneProject;