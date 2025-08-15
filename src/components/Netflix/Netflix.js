import './Netflix.css'
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
function Netflix() {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      console.log("Form submitted:", email);
    }
  };

  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };



  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week"
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ];
  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // agar same item open hai, to close karo
    } else {
      setOpenIndex(index); // warna new item open karo
    }
  };
  return (
    <div className='main-continer'>
      <div className='header'>
        <div className='nav'>
          <img src='./images/logo.png' className='logo' />
          <div style={{display:'flex'}}>
            <div className="footer">
              <div className="dropdown-container">
                <button
                  className="lang-btn"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>🌐</span> {language}
                  <img src="./images/down-icon.png" className="logo" alt="arrow" />
                </button>

                {isOpen && (
                  <div className="dropdown-menu">
                    <div onClick={() => handleSelect('English')}>English</div>
                    <div onClick={() => handleSelect('Urdu')}>Urdu</div>
                  </div>
                )}
              </div>
            </div>          
              <button style={{ border: 0, outline: 0, background: '#db0001' }}> Sign in</button>
          </div>
        </div>
        <div className='header-content'>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form class="email-signup">
            <input type="email" placeholder="Email address" required></input>
            <button type="submit">Get Started</button>
          </form>

        </div>
      </div>
      <div>
        <div className='features'>
          <div className='row'>
            <div className='text-col'>
              <h2>Enjoy on your TV</h2>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
            </div>
          </div>
          <div className='img-col'>
            <img src='/images/feature-1.png' />

          </div>


        </div>
        <div className='row'>
          <div className='img-col'>
            <img src='/images/feature-2.png' />

          </div>
          <div className='text'>
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
        <div className='row'>
          <div className='text'>
            <h2>Watch everywhere..</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='img-col'>
            <img src='/images/feature-3.png' />

          </div>
        </div>
        <div className='row'>
          <div className='img-col'>
            <img src='/images/feature-4.png' />

          </div>
          <div className='text'>
            <h2>Create profiles for children.</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>

        </div>

      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="according">
          {faqData.map((item, index) => (
            <li key={index}>
              <div className="faq-header" onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "×" : "+"}
                </span>
              </div>

              <div
                className={`content ${openIndex === index ? "open" : ""}`}
              >
                {item.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="banner-text-box">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="signup-form-box" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "error-input" : ""}
          />
          <button type="submit">Get Started</button>
        </form>

        {error && (
          <div className="error-message">
            <FaTimesCircle className="error-icon" />
            {error}
          </div>
        )}
      </div>
      <div style={{paddingLeft:'100px'}}>
      <div className='footer'>
        <a href='https://help.netflix.com/en/contactus'><h2>Questions? Contact us</h2></a>
        <div className='row'>
          <div className='col-link'>
            <a href='https://help.netflix.com/en/node/412'>FAQ</a>
            <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>Investor Relations</a>
            <a href='https://help.netflix.com/legal/privacy'>Privacy</a>
            <a href='https://fast.com/'>Speed Test</a>

          </div>
          <div className='col-link'>
            <a href='https://help.netflix.com/en'>Help Center</a>
            <a href='https://jobs.netflix.com/'>Jobs</a>
            <a href='#'>Cookie Preferences</a>
            <a href='https://help.netflix.com/legal/notices'>Legal Notices</a>

          </div>
          <div className='col-link'>
            <a href='https://www.netflix.com/pk/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>Account</a>
            <a href='https://help.netflix.com/en/node/14361'>Ways to Watch</a>
            <a href='https://help.netflix.com/en/node/134094'>Corporate Information</a>
            <a href='https://www.netflix.com/pk/browse/genre/839338'>Only on Netflix</a>

          </div>
          <div className='col-link'>
            <a href='https://media.netflix.com/de/'>Media Center</a>
            <a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>
            <a href='https://help.netflix.com/en/contactus'>Contact Us</a>

          </div>
        </div>
        <button className='lang-btn'>English<img src='./images/down-icon.png' className='logo' /></button>

      </div>
</div>
    </div>




  );
}
export default Netflix;