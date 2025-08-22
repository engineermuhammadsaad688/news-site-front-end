import { Link } from 'react-router-dom';
import './linkdink1.css'
import Linkdink22 from './linkdink22';

  


function Linkdink2() {
const peopleData = [
  { name: 'Samuel Tony', title: 'Head of Marketing at Alibaba', image: './images/user-3.png' },
  { name: 'Benjamin Leo', title: 'Head of Marketing at Alibaba', image: './images/user-4.png' },
  { name: 'Steave Greg', title: 'Head of Marketing at Alibaba', image: './images/user-5.png' },
  { name: 'Martin Lewis', title: 'Head of Marketing at Alibaba', image: './images/user-2.png' },
  { name: 'Clarence George', title: 'Head of Marketing at Alibaba', image: './images/user-1.png' }
];
  return (

    <div className='value-main-container'>
      <div className='layout-right'>
        <div className='sidebar-profile'>
          <div className='sidebar-profile-first'>
            <div className='sidebar-profile-first-first'>
              Ad...
            </div>
            <div className='sidebar-profile-first-second'>
              Master the 5 principles of web design

            </div>
            <div className='sidebar-profile-first-third'>
              <div className='sidebar-profile-first-third-first'>
                <img src='./images/user-1.png' alt='picture' />

              </div>
              <div className='sidebar-profile-first-third-second'>
                <img src='./images/mi-logo.png' alt='picture' />

              </div>
            </div>
            <div className='sidebar-profile-first-fourth'>
              <div>Brand and Demand in Xiaomi</div>
              <div className='sidebar-profile-first-fourth-first'>
                Learn More
              </div>
            </div>
          </div>

        </div>
        <div className='people-suggestions-container'>
          <div className='people-suggestions-wrapper'>
            <div className='people-suggestions-header'>
              People you may know
            </div>
            <div className='people-suggestions-body'>
              <div className='people-list'>

                <div>
                  {peopleData.map((person, index) => (
                    <Linkdink22
                      key={index}
                      name={person.name}
                      title={person.title}
                      image={person.image}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Linkdink2;