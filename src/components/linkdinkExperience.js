import { Link } from 'react-router-dom';
import './linkdink1.css'



function linkdinkExperience() {

  return (

    <div className='exp-wrapper'>
      <div className='exp-wrapper-section'>
        <div className='exp-section-title'>
          Experience
        </div>
        <div className='exp-section-content'>
          <div className='exp-item-wrapper'>
            <div className='exp-item-left'>
              <img src='./images/microsoft.png' alt='picture' />
            </div>
            <div className='exp-item-right'>
              <div style={{ fontWeight: 600, fontSize: 20 }}>Lead Front-End Developer</div>
              <div>Microsoft - Full-time</div>
              <div>Feb 2021 - Present - 1.5 years</div>
            </div>
          </div>
          <div style={{ paddingTop: 10, paddingLeft: 114, borderBottom: '1px solid', paddingBottom: 10, marginBottom: 20 }}>
            Computer programming is the process of performing a particular computation,
            usually by designing and building an executable computer program.
          </div>
          <div className='exp-item-wrapper'>
            <div className='exp-item-left'>
              <img src='./images/slack.png' alt='picture' />
            </div>
            <div className='exp-item-right'>
              <div style={{ fontWeight: 600, fontSize: 20 }}>Full Stack Developer</div>
              <div>Slack - Full-time</div>
              <div>June 2018 - Jan 2021 - 2.6 years</div>
            </div>
          </div>
          <div style={{ paddingTop: 10, paddingLeft: 114, borderBottom: '1px solid', paddingBottom: 10, marginBottom: 20 }}>
            Computer programming is the process of performing a particular computation,
            usually by designing and building an executable computer program.
          </div>
          <div className='exp-item-wrapper'>
            <div className='exp-item-left'>
              <img src='./images/google.png' alt='picture' />
            </div>
            <div className='exp-item-right'>
              <div style={{ fontWeight: 600, fontSize: 20 }}>Web Developer</div>
              <div>Google Inc - Full-time</div>
              <div>Sept 2015 - May 2018 - 2.8 years</div>
            </div>
          </div>
          <div style={{ paddingTop: 10, paddingLeft: 114, borderBottom: '1px solid', paddingBottom: 10, marginBottom: 20 }}>
            Computer programming is the process of performing a particular computation,
            usually by designing and building an executable computer program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'Center', justifyContent: 'Center' }}>
          Show all 7 experiences
          <img src="images/right-arrow.png" alt="profile picture"
            style={{
              alignItems: 'Center',
              marginTop: 7,
              marginLeft: 13,
              display: 'flex'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default linkdinkExperience;