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
                        <div className='property-footer-price'>
                            $100 / day</div>
                    </div>
                </div>
            </div>
            <div className="booking-container">
                <div className="booking-card">
                    <div className="booking-checkin">
                        <div className="booking-checkin-label">Check-in</div>
                        <div className="booking-checkin-date">Add date</div>
                    </div>
                    <div className="booking-checkout">
                        <div className="booking-checkout-label">Check-out</div>
                        <div className="booking-checkout-date">Add date</div>
                    </div>
                    <div className="booking-guests">
                        <div className="booking-guests-label">Guests</div>
                        <div className="booking-guests-count">2 guests</div>
                    </div>
                    <div className="booking-button">
                        Check availability
                    </div>
                </div>
            </div>
            <div className='property-overview-container'>
                <div className='property-feature-list'>
                    <div className='feature-item'>
                        <div className='feature-icon-wrapper'>
                            <i class="fa-solid fa-home"></i>
                        </div>
                        <div className='feature-details'>
                            <div>Entire home</div>
                            <div>You will have the entire flat for you.</div>
                        </div>
                    </div>
                    <div className='feature-item'>
                        <div className='feature-icon-wrapper'>
                            <i class="fa-solid fa-droplet"></i>
                        </div>
                        <div className='feature-details'>
                            <div>Enhanced Clean</div>
                            <div>This host has committed to Staybnbs cleaning process.</div>
                        </div>
                    </div>
                    <div className='feature-item-location'>
                        <div className='feature-icon-wrapper'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='feature-details'>
                            <div>Great location</div>
                            <div>90% of recent guests gave the location a 5-star rating.</div>
                        </div>
                    </div>
                    <div className='feature-item-checkin'>
                        <div className='feature-icon-wrapper'>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className='feature-details'>
                            <div>Great check-in experience</div>
                            <div>100% of recent guests gave the check-in process a 5-star rating.</div>
                        </div>
                    </div>
                </div>
                <div className='property-description-divider'>
                    <div className='property-description'>
                        Guests will be allocated on the ground floor according to availability. You get a comfortable<br />
                        Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the <br />
                        guest slot please mark the number of guests to get the exact price for groups. The Guests<br />
                        will be allocated ground floor according to availability. You get the comfortable two<br />
                        bedroom apartment that has a true city feeling.
                    </div>
                </div>
            </div>
            <div className='location-container'>
                <div className='location-title'>
                    Location on map
                </div>
                <div className='location-map-wrapper'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13612.813000445186!2d74.33477705!3d31.549700449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f8b44444ff%3A0x8ffabf43f3b4f8cf!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='location-container'>
                <div className='location-details'>
                    <div className='location-city'>San Francisco, California, United States</div>
                    <div className='location-description'>It's like a home away from home</div>
                </div>
            </div>

            <div className='second-component'>
                sdcdsds
            </div>



        </>
    );
}
export default AA;