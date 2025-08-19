import { useState } from "react";
import './portfolio.css'
import { FaAppStoreIos, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FaCropSimple } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Portfolio() {
    const [activeTab, setActiveTab] = useState("skills");

    const handleToggle = (tabName) => {
        // agar dubara same tab click hua to close kar do
        if (activeTab === tabName) {
            setActiveTab("");
        } else {
            setActiveTab(tabName);
        }
    };

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <nav>
                        <img src='./images/logo.png ' className='logo' />
                        <ul>
                            <li> <Link to="/portfolio" className='nav-item'>Home</Link></li>
                            <li> <Link to="/portfolio" className='nav-item'>About</Link></li>
                            <li> <Link to="/portfolio" className='nav-item'>Services</Link></li>
                            <li> <Link to="/portfolio" className='nav-item'>Portfolio</Link></li>
                            <li> <Link to="/portfolio" className='nav-item'>Contact</Link></li>
                       </ul>
                    </nav>
                    <div className='header-text'>
                        <p>UI/UX Designer</p>
                        <h1>Hi, I'm <span>Kevin</span><br /> Jen From Australia</h1>
                    </div>

                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='about-col-1'>
                            <img src='./images/user.png ' />
                        </div>
                        <div className='about-col-2'>
                            <h1 className='sub-tile'>About Me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh, tincidunt sit amet sapien quis,
                                elementum molestie tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Mauris eleifend magna id ante convallis mattis. Quisque in sem tristique,
                                dictum sapien et,accumsan libero.</p>


                            {/* Tabs Title */}
                            <div className="tab-titles">
                                <p
                                    className={`tab-link ${activeTab === "skills" ? "active-link" : ""}`}
                                    onClick={() => handleToggle("skills")}
                                >
                                    Skills
                                </p>
                                <p
                                    className={`tab-link ${activeTab === "experience" ? "active-link" : ""}`}
                                    onClick={() => handleToggle("experience")}
                                >
                                    Experience
                                </p>
                                <p
                                    className={`tab-link ${activeTab === "education" ? "active-link" : ""}`}
                                    onClick={() => handleToggle("education")}
                                >
                                    Education
                                </p>
                            </div>
                            {/* Skills */}
                            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
                                <ul>
                                    <li><span>UI/UX</span><br />Designing Web/App Interfaces</li>
                                    <li><span>Web Development</span><br />Web app Development</li>
                                    <li><span>App Development</span><br />Building Android/iOS apps</li>
                                </ul>
                            </div>
                            {/* Experience */}
                            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
                                <ul>
                                    <li><span>2021 - Current</span><br />UI/UX Design Training at ET Institute</li>
                                    <li><span>2019 - 2021</span><br />Team lead at StarApp LLC.</li>
                                    <li><span>2017 - 2019</span><br />UI/UX Design Executive at Coin Digital Ltd.</li>
                                    <li><span>2016 - 2017</span><br />Internship at ekart eCommerce.</li>
                                </ul>
                            </div>
                            {/* Education */}
                            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
                                <ul>
                                    <li><span>2016</span><br />UI/UX Design Training at ET Institute</li>
                                    <li><span>2016</span><br />MBA from MIT Bangalore.</li>
                                    <li><span>2014</span><br />BBA from ISM Bangalore.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="services">
                <div className='container'>
                    <h1 className='sub-tile'>Services Me</h1>
                    <div className="services-list">
                        <div >
                            <FaCode style={{
                                fontSize: 48
                            }} />
                            <h2>Web Design</h2>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh,
                                tincidunt sit amet sapien quis.</p>
                            <a href='#'>learn more</a>

                        </div>
                        <div >
                            <FaCropSimple style={{ fontSize: 50 }} />
                            <h2>UI/UX Design</h2>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh,
                                tincidunt sit amet sapien quis.</p>
                            <a href='#'>learn more</a>

                        </div>
                        <div >
                            <FaAppStoreIos style={{ fontSize: 60, color: "skyblue", }} />
                            <h2>App Design</h2>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nibh,
                                tincidunt sit amet sapien quis.</p>
                            <a href='#'>learn more</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src="images/work-1.png" />
                            <div class="layer">
                                <h3>Social Media App</h3>
                                <p>The app connects you yo the talented people around the world. Download it from play store.</p>
                                <a href="#"> <FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-2.png" />
                            <div class="layer">
                                <h3>Music App</h3>
                                <p>The app connects you yo the talented people around the world. Download it from play store.</p>
                                <a href="#"> <FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-3.png" />
                            <div class="layer">
                                <h3>Online Shopping App</h3>
                                <p>The app connects you yo the talented people around the world. Download it from play store.</p>
                                <a href="#"> <FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>




    );
};
export default Portfolio;