import { Link } from 'react-router-dom';
import './linkdink1.css'



function Linkdink3() {

  return (
    <div className='value-main-container'>

        <div className='layout-left'>
          <div className='left-section'>
            <div className='section-one'>
              <div className='section-one-part-a'>
                <div className='profile-banner'>
                  <img src='./images/cover-pic.png' alt='profile' />
                </div>
                <div className='profile-banner'>
                  <div className='profile-avatar-wrapper'>
                    <img src='./images/user-1.png' alt='profile' />
                  </div>
                </div>

              </div>
              <div className='section-part-b'>
                <div className='section-one-part-b-top'>
                  <div style={{ fontWeight: '500', fontSize: '20px', }}>
                    Rayan Walton
                  </div>
                  <div >
                    Web Developer at Microsoft | Former developer at DataStack and Intern at Oracle
                  </div>
                  <div>
                    San Francisco, United States · Contact info
                  </div>
                </div>
              </div>
              <div className='area-one-segment-c'>
                <div className='segment-alpha-first'>
                  <div className='segment-alpha-first-top'>
                    <img src='./images/user-2.png' alt='picture' />
                  </div>
                  <div className='segment-alpha-first-bottom'>
                    1 mutual connection: Orlando Diggs
                  </div>
                </div>
                <div className='segment-alpha-second'>
                  <div className='segment-alpha-second-top'>
                    <div className='segment-alpha-second-top-left'>
                      <div className='segment-alpha-second-top-left-a'>
                        <img src='./images/Connect.png' />
                      </div>
                      <div className='segment-alpha-second-top-left-b'>
                        Connect
                      </div>
                    </div>
                    <div className='segment-alpha-second-top-right'>
                      <div className='segment-alpha-second-top-right-a'>
                        <img src='./images/Message.png' />
                      </div>
                      <div className='segment-alpha-second-top-right-b'>
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className='right-section'>
            <div className='right-section-right'>
              <div className='right-section-right-one'>
                About
              </div>
              <div className='right-section-right-two'>
                The success of every websites depends on search engine optimisation and digital marketing strategy.<br />
                If you are on first page of all major search engines then you are ahead among your competitors on first page of all major search engines then you are ahead among your competitors.


              </div>
              <div className='section-level-option'>
                See more...
              </div>
            </div>
          </div>
          {/* <div className='exp-wrapper'>
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
          </div> */}
          <div className='edu-container'>
            <div className='edu-main-container'>
              <div className='edu-header'>
                Education
              </div>
              <div className='edu-list'>
                <div className='edu-item'>
                  <div className='edu-logo'>
                    <img src='./images/stanford.png' alt='picture' />
                  </div>
                  <div className='edu-details'>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>Stanford University</div>
                    <div>BSEE, Electrical Engineering</div>
                    <div>2018 - 2022</div>
                  </div>
                </div>
                <div style={{ paddingTop: 10, paddingLeft: 114, borderBottom: '1px solid', paddingBottom: 10, marginBottom: 20 }}></div>

                <div className='edu-item'>
                  <div className='edu-logo'>
                    <img src='./images/north.png' alt='picture' />
                  </div>
                  <div className='edu-details'>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>Northwestern University</div>
                    <div>Computer Science</div>
                    <div>2015 - 2018</div>
                  </div>
                </div>
                <div style={{ paddingTop: 10, paddingLeft: 114, borderBottom: '1px solid', paddingBottom: 10, marginBottom: 20 }}></div>

                <div className='edu-item'>
                  <div className='edu-logo'>
                    <img src='./images/mit.png' alt='picture' />
                  </div>
                  <div className='edu-details'>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>Harvard University</div>
                    <div>Senior High School</div>
                    <div>2005 - 2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='skills-section'>
            <div className='skills-container'>
              <div className='skills-wrapper'>
                <div className='skills-header'>
                  <h2>Skills</h2>
                </div>
                <div className='skills-content'>
                  <div className='skills-list-left'>
                    <div className='skill-item'>Leadership</div>
                    <div className='skill-item'>WebDesign</div>
                    <div className='skill-item'>Development</div>
                    <div className='skill-item'>Communication</div>
                    <div className='skill-item'>UI/UX</div>
                    <div className='skill-item'>Planning</div>
                    <div className='skill-item'>Coding</div>
                  </div>
                  <div className='skills-list-right'>
                    <div className='skill-item'>JavaScript</div>
                    <div className='skill-item'>Python</div>
                    <div className='skill-item'>Entrepreneurship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='languages-section'>
            <div className='languages-container'>
              <div className='languages-title'>
                Languages
              </div>
              <div className='languages-buttons'>
                <button className="language-btn">English</button>
                <button className="language-btn">German</button>
              </div>
            </div>
          </div>
          <div>
            About Accessibility Help Center Privacy Policy Advertising Get the App More
          </div>
          <div className='footer-section'>
            <div className='footer-item'>
              <img src='./images/logo.png' alt='profile' />
            </div>
            <div className='footer-item'>
              LinkedIn © 2022. All rights reserved
            </div>
          </div>
        </div>
      </div>
  );
}

export default Linkdink3;