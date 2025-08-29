import { Link } from 'react-router-dom';
import './portfolio.css'
import { useState } from 'react';


<script src="https:/kit.fontawesome.com/c4254e24a8.js" crossorigin="anonymous"></script>


function Portfolio() {
    const [activeTab, setActiveTab] = useState("");


    const handleToggle = (tab) => {
        if (activeTab === tab) {
            setActiveTab(""); // dubara click karne par close ho jaye//
        } else {
            setActiveTab(tab); // warna open kar do
        }
    };
    const scriptURL = "https://script.google.com/macros/s/AKfycbycNMKQVnoRbG3CvK26CAIURW97-vwdkviZaTtoXOaLmG52SRFVHkgpw0nsGZ1Z8e4/exec";
const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        setMsg("✅ Message sent successfully!"); // state update
        form.reset();
        setTimeout(() => setMsg(""), 3000);
      })
      .catch((error) => {
        setMsg("❌ Error: " + error.message);
      });
  };
        return (
            <div className="main-container">
                <div className='header'>
                    <div className='wrap'>
                        <div className='logo'>

                            <Link to="/" className="active-link"><img src="./images/logo.png" alt="logo" /><span></span></Link>
                        </div>
                        <div className='button-wrap'>
                            <Link to="/" className="button">Home</Link>
                            <Link to="/" className="button">About</Link>
                            <Link to="/" className="button">Services</Link>
                            <Link to="/" className="button">Portfolio</Link>
                            <Link to="/" className="button">Contact</Link>
                        </div>

                    </div>
                    <div className='title'>
                        <h1>web/site Developer</h1>
                        <h2><p>I am a Saad <span>Developer</span>
                            <br /> City From Pakistan</p></h2>
                    </div>

                </div>
                <div className='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='about-col-1'>
                                <img src="./images/User.png" alt="User" />
                            </div>
                            <div className='about-col-2'>
                                <h1 className='sub-tile'>About Me</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh, tincidunt sit amet sapien quis, elementum molestie tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eleifend magna id ante convallis mattis.
                                    Quisque in sem tristique, dictum sapien et, accumsan libero.</p>
                                <div className="tab-titles">
                                    <p
                                        className={`tab-1-link ${activeTab === "skills" ? "active-link" : ""}`}
                                        onClick={() => handleToggle("skills")}
                                    >
                                        Skills
                                    </p>
                                    <p
                                        className={`tab-1-link ${activeTab === "experience" ? "active-link" : ""}`}
                                        onClick={() => handleToggle("experience")}
                                    >
                                        Experience
                                    </p>
                                    <p
                                        className={`tab-1-link ${activeTab === "education" ? "active-link" : ""}`}
                                        onClick={() => handleToggle("education")}
                                    >
                                        Education
                                    </p>
                                </div>

                                {/* Skills */}
                                <div
                                    className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""
                                        }`}
                                    id="skills"
                                >
                                    <div>
                                        <div>
                                            <span>UI/UX</span>
                                            <br />
                                            Designing Web/App Interfaces
                                        </div>
                                        <div>
                                            <span>Web Development</span>
                                            <br />
                                            Web app Development
                                        </div>
                                        <div>
                                            <span>App Development</span>
                                            <br />
                                            Building Android/iOS apps
                                        </div>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div
                                    className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""
                                        }`}
                                    id="experience"
                                >
                                    <div>
                                        <div>
                                            <span>2021 - Current</span>
                                            <br />
                                            UI/UX Design Training at ET Institute
                                        </div>
                                        <div>
                                            <span>2019 - 2021</span>
                                            <br />
                                            Team lead at StarApp LLC.
                                        </div>
                                        <div>
                                            <span>2017 - 2019</span>
                                            <br />
                                            UI/UX Design Executive at Coin Digital Ltd.
                                        </div>
                                        <div>
                                            <span>2016 - 2017</span>
                                            <br />
                                            Internship at ekart eCommerce.
                                        </div>
                                    </div>
                                </div>

                                {/* Education */}
                                <div
                                    className={`tab-contents ${activeTab === "education" ? "active-tab" : ""
                                        }`}
                                    id="education"
                                >
                                    <div>
                                        <div>
                                            <span>2016</span>
                                            <br />
                                            UI/UX Design Training at ET Institute
                                        </div>
                                        <div>
                                            <span>2016</span>
                                            <br />
                                            MBA from MIT Bangalore.
                                        </div>
                                        <div>
                                            <span>2014</span>
                                            <br />
                                            BBA from ISM Bangalore.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Services">
                    <div className="Container">
                        <h1 className="sub-tile">My Services</h1></div>
                    <div className="Services-list">
                        <div className="service-card">
                            <i className="fas fa-code"></i>
                            <h1 className="first">Web Design</h1>
                            <p className="firs">
                                lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit.<br /> Sed nulla nibh,
                                tincidunt sit amet<br /> sapien quis.
                            </p>
                            <a className="link" href="#">learn more</a>
                        </div>

                        <div className="service-card">
                            <i className="fas fa-crop-alt"></i>

                            {/* <FaCropSimple style={{ fontSize: 50 }} /> */}
                            <h1 className="first">Web Design</h1>
                            <p className="firs">
                                lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit.<br /> Sed nulla nibh,
                                tincidunt sit amet<br /> sapien quis.
                            </p>
                            <a className="link" href="#">learn more</a>
                        </div>

                        <div className="service-card">
                            <i className="fab fa-app-store"></i>
                            {/* <FaAppStoreIos style={{ fontSize: 50 }} /> */}
                            <h1 className="first">Web Design</h1>
                            <p className="firs">
                                lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit.<br /> Sed nulla nibh,
                                tincidunt sit amet<br /> sapien quis.
                            </p>
                            <a className="link" href="#">learn more</a>
                        </div>
                    </div>

                </div>
                <div className="Work-Section">
                    <div className="Main-Wrapper">
                        <h1 className="section-heading">My Work</h1></div>

                    <div className="Card-Group">
                        <div className="Work">
                            <img src="./images/work-1.png" />
                            <div className="layer">
                                <h2>Social Media App</h2>
                                <p>The app connects you yo the talented people around the world.
                                    Download it from play store.</p>
                                <Link to="/" className="active-link"><i class="fas fa-external-link-alt"></i><span></span></Link>

                            </div>
                        </div>
                        <div className="Work">
                            <img src="./images/work-2.png" />
                            <div className="layer">
                                <h2>Music App</h2>
                                <p>The app connects you yo the talented  people around the world.
                                    Download it from play store.</p>
                                <Link to="/" className="active-link"><i class="fas fa-external-link-alt"></i><span></span></Link>

                            </div>
                        </div>
                        <div className="Work">
                            <img src="./images/work-3.png" />
                            <div className="layer">
                                <h2>Social Media App</h2>
                                <p>The app connects you yo the talented people around the world.
                                    Download it from play store.</p>
                                <Link to="/" className="active-link"><i class="fas fa-external-link-alt"></i><span></span></Link>

                            </div>
                        </div>
                    </div>
                    <Link to="/" className="btn">See more</Link>


                </div>
                <div className="contact">
                    <div className="container">
                        <div className="row-2">
                            <div className="contact-left">
                                <h1 className="sub-title">Contact Me</h1>
                                <p><i class="fas fa-paper-plane"></i> contact@example.com</p>
                                <p><i class="fas fa-phone-square-alt"></i>0123456789</p>
                                <div className="social-icons">
                                    <Link to="https:/facebook.com" className="active-link">  <i class="fab fa-facebook"></i><span></span></Link>
                                    <Link to="/" className="active-link">  <i class="fab fa-twitter-square"></i><span></span></Link>
                                    <Link to="/" className="active-link">  <i class="fab fa-instagram"></i><span></span></Link>
                                    <Link to="/" className="active-link">  <i class="fab fa-linkedin"></i><span></span></Link>
                                </div>
                                <Link to="https://docs.google.com/spreadsheets/d/1xNFWr8V9Yqa1FcQBBLESTtUQBS89qtZQB7pdWa3gheI/edit?gid=0#gid=0" download class="btn btn2"><span></span>Download CV</Link>


                            </div>
                            <div className="contact-right">
                                <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                                    <input type="text" name="Name" placeholder="Your Name" required />
                                    <input type="email" name="Email" placeholder="Your Email" required />
                                    <textarea name="Message" rows="6" placeholder="Your Message" required />

                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </form>
        <span id='msg' style={{color:'#61b752',marginTop:'40px',display:'block'}}></span>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright @ Kevin. Made with <i class="fas fa-heart"></i> by Easy Tutorials</p>
                    </div>
                </div>
            </div>

        );
    }

    export default Portfolio;