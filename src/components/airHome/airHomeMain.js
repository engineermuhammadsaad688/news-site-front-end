import './airHomeMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function AirHomeMain() {
    return (
        <>
            <div className='header-container'>
                <div className='header-banner'>
                    <div className='header-top'>
                        <div className='header-logo-container'>
                            <div className='logo-wrapper'>
                                <img src='images/logo.png' alt='profile picture' />
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

                    <div className='search-section'>
                        <div className='search-heading'>
                            Find Your Next Stay
                        </div>
                        <div className='search-box'>
                            <div className='search-fields'>
                                <div className='field-group'>
                                    <div className='field-label'>Location</div>
                                    <div className='field-placeholder'>Where are you going?</div>
                                </div>
                                <div className='field-group'>
                                    <div className='field-label'>Check in</div>
                                    <div className='field-placeholder'>Add Dates</div>
                                </div>
                                <div className='field-group'>
                                    <div className='field-label'>Check out</div>
                                    <div className='field-placeholder'>Add Dates</div>
                                </div>
                                <div className='field-group'>
                                    <div className='field-label'>Guests</div>
                                    <div className='field-placeholder'>Add guests</div>
                                </div>
                            </div>
                            <div className='search-icon'>
                                <img src='images/search.png' alt='search icon' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='exclusive-container'>
                <div className='exclusive-content'>
                    <div className='exclusive-heading'>Exclusives</div>
                    <div className='exclusive-list'>
                        <div className='exclusive-item london'>
                            <div>London</div>
                            <div>Starts at $350</div>
                        </div>
                        <div className='exclusive-item switzerland'>
                            <div>Switzerland</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item australia'>
                            <div>Australia</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item france'>
                            <div>France</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item amsterdam'>
                            <div>Amsterdam</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item netherlands'>
                            <div>Netherlands</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item newyork'>
                            <div>New York</div>
                            <div>Starts at $350</div>
                        </div>
                        <div className='exclusive-item chicago'>
                            <div>Chicago</div>
                            <div>Starts at $350</div>
                        </div>
                        <div className='exclusive-item sanfrancisco '>
                            <div>San Francisco</div>
                            <div>Starts at $250</div>
                        </div>
                        <div className='exclusive-item shanghai'>
                            <div>Shanghai</div>
                            <div>Starts at $250</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gallery-section'>
                <div className='gallery-container'>
                    <div className='gallery-heading'>
                        Trending Places
                    </div>
                    <div className='gallery-grid'>
                        <div className='gallery-column-left'>
                            <div className='gallery-image-large'>
                                <img src='images/dubai.png' alt='profile picture' />
                            </div>
                            <div className='gallery-title-large'>
                                Dubai
                            </div>
                        </div>
                        <div className='gallery-column-right'>
                            <div className='gallery-image-top-right'>
                                <img src='images/new-york.png' alt='profile picture' />
                            </div>
                            <div className='gallery-title-top-right'>
                                New York
                            </div>
                        </div>
                        <div className='gallery-column-right'>
                            <div className='gallery-image-bottom-left'>
                                <img src='images/paris.png' alt='profile picture' />
                            </div>
                            <div className='gallery-title-bottom-left'>
                                Paris
                            </div>
                        </div>
                        <div className='gallery-column-right'>
                            <div className='gallery-image-bottom-right'>
                                <img src='images/new-delhi.png' alt='profile picture' />
                            </div>
                            <div className='gallery-title-bottom-right'>
                                New Delhi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-section'>
                <div className='banner-container'>
                    <div className='banner-card'>
                        <div className='banner-heading'>
                            Sharing <br />
                            Is Earning Now
                        </div>
                        <div className='banner-subtext'>
                            Great opportunity to make money by <br />sharing your extra space.
                        </div>
                        <div className='banner-button'>
                            Know more
                        </div>
                    </div>
                </div>
            </div>
            <div className='travel-stories-section'>
                <div className='travel-stories-heading'>
                    Travellers stories
                </div>
                <div className='travel-stories-cards'>
                    <div className='travel-story-card europe-story'>
                        Popular European countries <br />with a budget of Just <br />$10,000
                    </div>
                    <div className='travel-story-card world-tour-story'>
                        Travelled more than 100<br />Countries in less than<br /> a year
                    </div>
                    <div className='travel-story-card thailand-story'>
                        Best experience you get while<br />travelling to Thailand
                    </div>
                </div>
            </div>
            <div class="centered-button-wrapper">
                <div class="rounded-action-button">
                    Start making money
                </div>
            </div>
            <div className='about-section'>
                <div className='about-heading'>
                    About Staybnb
                </div>
                <div className='about-description'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000<br />
                    years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,<br />
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source
                </div>
            </div>
            <div className="container-class">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <footer class="footer-container">
                <div class="footer-logo">
                    <h2>MyWebsite</h2>
                </div>
                <div class="footer-social">
                    <a href="login">home</a>
                    <a href="signUp">Twitter</a>
                    <a href="article">LinkedIn</a>
                    <a href="YouTube">YouTube</a>
                </div>
                <div class="footer-copyright">
                    Footer © 2025, Staybrnb Inc.
                    <a href="https://github.com/">AirHome</a>

                </div>
            </footer>







        </>

    );
}


export default AirHomeMain;