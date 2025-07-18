import './a.css'

function AA() {
    return (


        <>
            <div className='header-top'>
                <div className='header-logo-container'>
                    <div className='logo-wrapper'>
                        <img src='images/logo-red.png' alt='profile picture' />
                    </div>
                </div>
                <div className='header-navigation'>
                    <div className='nav-item'>Popular Places</div>
                    <div className='nav-item'>Travel Outside</div>
                    <div className='nav-item'>Online Packages</div>
                </div>
                <div className='header-register'>
                    Register Now
                </div>
            </div>
            <div className='property-card-container'>
                <div className='property-card-content'>
                    <div className='property-title-section'>
                        <div className='property-title'>Wenge House</div>
                        <div className='property-rating-location'>
                            <div>⭐⭐⭐⭐☆</div>
                            <div>245 reviews</div>
                            <div>Location: San Francisco, California, United States</div>
                        </div>
                    </div>
                    <div className='property-images-section'>
                        <div className='property-main-image'>
                            <img src='images/house-1.png' alt='house main' />
                        </div>
                        <div className='property-side-images-row'> 
                            <div className='property-side-image'>
                                <img src='images/house-2.png' alt='house side' />
                            </div>
                            <div className='property-side-image'>
                                <img src='images/house-3.png' alt='house side' />
                            </div>
                        </div>
                        <div className='property-side-images-row'>
                            <div className='property-side-image'>
                                <img src='images/house-3.png' alt='house side' />
                            </div>
                            <div className='property-side-image'>
                                <img src='images/house-2.png' alt='house side' />
                            </div>
                        </div>
                    </div>
                    <div className='property-details-footer'>
                        <div className='property-footer-description'>
                            Entire rental unit hostel by Brandon <br />
                            2 guests · 2 beds · 2 bathrooms
                        </div>
                        <div className='property-footer-price'>$100 / day</div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default AA;