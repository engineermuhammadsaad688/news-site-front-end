import './linkdink.css'
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

<FaAngleRight />
function Linkdink() {

  const [activeItem, setActiveItem] = useState('home');
  const [showSmallImage, setShowSmallImage] = useState(false);

  const toggleSmallImage = () => {
    setShowSmallImage(!showSmallImage);
  };


  return (
    <>
      <div className='first-component'>
        <div className='first-component-first'>
          <div className='first-component-first-first'>
            <div className='first-component-first-first-first'>
              <img src='images/logo.png' alt='profile picture' />

            </div>

            <div className='first-component-first-first-second'>
              <div class="search-container">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className='first-component-first-second'>

            <div
              className={`first-component-first-second-first ${activeItem === 'home' ? 'active' : ''}`}
              onClick={() => setActiveItem('home')}
            >
              <div className='first-component-first-second-first-first'>
                <img src="/images/home.png" alt="React logo" />
              </div>
              <div className='first-component-first-second-first-second'>Home</div>
            </div>

            <div
              className={`first-component-first-second-second ${activeItem === 'network' ? 'active' : ''}`}
              onClick={() => setActiveItem('network')}
            >
              <div className='first-component-first-second-second-first'>
                <img src="/images/network.png" alt="React logo" />
              </div>
              <div className='first-component-first-second-second-second'>My Network</div>
            </div>

            <div
              className={`first-component-first-second-third ${activeItem === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveItem('jobs')}
            >
              <div className='first-component-first-second-third-first'>
                <img src="/images/jobs.png" alt="React logo" />
              </div>
              <div className='first-component-first-second-third-second'>Jobs</div>
            </div>

            <div
              className={`first-component-first-second-fourth ${activeItem === 'messaging' ? 'active' : ''}`}
              onClick={() => setActiveItem('messaging')}
            >
              <div className='first-component-first-second-fourth-first'>
                <img src="/images/message.png" alt="React logo" />
              </div>
              <div className='first-component-first-second-fourth-second'>Messaging</div>
            </div>

            <div
              className={`first-component-first-second-fifth ${activeItem === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveItem('notifications')}
            >
              <div className='first-component-first-second-fifth-first'>
                <img src="/images/notification.png" alt="React logo" />
              </div>
              <div className='first-component-first-second-fifth-second'>Notifications</div>
            </div>

          </div>
          <div className="first-component-third">
            <div className="first-component-third-first">
              <img
                src="./images/user-1.png"
                alt="React logo"
                onClick={toggleSmallImage}
              />
            </div>

            <div className="green-dot"></div>

            {showSmallImage && (
              <div className="small-image">
                <div className='top-second-component'>
                  <div className='top-second-component-first'>
                    <div className='top-second-component-first-first'>
                      <div className='top-second-component-first-first-first'>
                        <img src='images/user-1.png' alt='profile picture' />
                      </div>
                      <div className='top-second-component-first-first-second'>
                        <div className='top-second-component-first-first-second-first'>
                          Rayan Walton
                        </div>
                        <div className='top-second-component-first-first-second-second'>
                          See your profile
                        </div>
                      </div>
                    </div>
                    <div className='top-second-component-first-second'>
                      <div className='top-second-component-first-second-first'>
                        <div className='top-second-component-first-second-first-first'>
                          <img src='images/feedback.png' alt='profile picture' />

                        </div>
                        <div className='top-second-component-first-second-first-second'>
                          Settings & Privacy
                        </div>

                      </div>


                    </div>
                    <div className='top-second-component-first-second'>
                      <div className='top-second-component-first-second-first'>
                        <div className='top-second-component-first-second-first-first'>
                          <img src='images/setting.png' alt='profile picture' />

                        </div>
                        <div className='top-second-component-first-second-first-second'>
                          Help & Support
                        </div>

                      </div>


                    </div>
                    <div className='top-second-component-first-second'>
                      <div className='top-second-component-first-second-first'>
                        <div className='top-second-component-first-second-first-first'>
                          <img src='images/help.png' alt='profile picture' />

                        </div>
                        <div className='top-second-component-first-second-first-second'>
                          Display & Accessibility
                        </div>

                      </div>

                    </div>
                    <div className='top-second-component-first-second'>
                      <div className='top-second-component-first-second-first'>
                        <div className='top-second-component-first-second-first-first'>
                          <img src='images/display.png' alt='profile picture' />

                        </div>
                        <div className='top-second-component-first-second-first-second'>
                          Give Feedback
                        </div>

                      </div>


                    </div>
                    <div className='top-second-component-first-second'>
                      <div className='top-second-component-first-second-first'>
                        <div className='top-second-component-first-second-first-first'>
                          <img src='images/logout.png' alt='profile picture' />

                        </div>
                        <div className='top-second-component-first-second-first-second'>
                          Logout
                        </div>

                      </div>


                    </div>
                  </div>


                </div>
              </div>
            )}
          </div>


        </div>
      </div>
      <div className='value-second-component'>
        <div className='value-second-component-first'>
          <div className='value-second-component-first-first'>
            <div className='value-second-component-first-first-first'>
              <img src='./images/cover-pic.png' alt='profile' />
            </div>
            <div className='value-second-component-first-first-second'>
              <div className='top'>
                <img src='./images/user-1.png' alt='profile' />

              </div>
              <div className='value-second-component-first-first-second-first'>
                <div className='value-second-component-first-first-second-first-first'>
                  <div className='value-second-component-first-first-second-first-first'>
                    Rayan Walton
                  </div>
                  <div className='value-second-component-first-first-second-first-second'>
                    Web Developer at Microsoft
                  </div>

                </div>
                <div className='value-second-component-first-first-second-first-second'>
                  <div className='value-second-component-first-first-second-first-second-first'>
                    <div> Your profile views</div>
                    <div> 52</div>
                  </div>
                  <div className='value-second-component-first-first-second-first-second-second'>
                    <div>
                      Your post views
                    </div>
                    <div>810</div>
                  </div>
                  <div className='value-second-component-first-first-second-first-second-third'>
                    <div >
                      Your connections
                    </div>
                    <div>205</div>
                  </div>
                </div>
                <div className='value-second-component-first-first-second-first-third'>
                  <div className='value-second-component-first-first-second-first-third-first'>
                    <div className='value-second-component-first-first-second-first-third-first-first'>
                      <img src='./images/items.png' alt='profile' />

                    </div>
                    <div>
                      My items

                    </div>
                  </div>
                  <div className='value-second-component-first-first-second-first-third-second'>
                    <div className='value-second-component-first-first-second-first-third-second-first'>
                      <img src='./images/premium.png' alt='profile' />
                    </div>
                    <div>
jiejwijiewokjkk
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </div>
          <div className='value-second-component-first-second'>

          </div>
        </div>
        <div className='value-second-component-second'>
          jweiiueiw
        </div>
        <div className='value-second-component-third'>
          jweiiueiw
        </div>
      </div>

    </>
  );
}

export default Linkdink;