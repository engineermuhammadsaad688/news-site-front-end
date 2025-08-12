import './linkdink.css'

import { FaAngleRight } from 'react-icons/fa';
import Linkdink15 from './linkdink15';


<FaAngleRight />
function Linkdink12() {

 

  return (
    <div className='main-container-top'>

          <div className='linkedin-post-section'>
            <div className='linkedin-post-box'>
              <div className='linkedin-post-header'>
                <div className='linkedin-post-header-img'>
                  <img src='./images/user-1.png' alt='profile' />
                </div>
                <div className='linkedin-post-header-input'>
                  <input type='text' placeholder='Write a post' className='custom-input' />
                </div>
              </div>
              <div className='linkedin-post-actions'>
                {[['photo.png', 'Photo'], ['video.png', 'Video'], ['Event.png', 'Event']].map(([img, label], idx) => (
                  <div className='linkedin-post-action' key={idx}>
                    <div className='linkedin-post-action-icon'><img src={`./images/${img}`} alt='profile' /></div>
                    <div>{label}</div>
                  </div>
                ))}
                <div className='linkedin-post-button'>Post</div>
              </div>
            </div>
<Linkdink15/>

          </div>

      </div>

      );
}

      export default Linkdink12;