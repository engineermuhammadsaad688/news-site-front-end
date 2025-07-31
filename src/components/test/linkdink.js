import './linkdink.css'
import React, { useState } from 'react';

function Linkdink() {

  const [activeItem, setActiveItem] = useState('home');
    const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);


  return (
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
            <div class="first-component-third">
                <div class="first-component-third-first">

                    <img src="./images/user-1.png" alt="React logo"/>

                </div>
                <div class="small-image">
                    njjkajkjfikar
                </div>
                <div class="green-dot">

                </div>

            </div>


    </div>
    </div>


  );
}

export default Linkdink;