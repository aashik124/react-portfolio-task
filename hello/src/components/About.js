import './About.css';
import profileImg from '../assets/IMG_3465.jpg'; 

const About = () => {
  return (
    <section id="about" className="about-section reveal">
        
        <div className="about-header"><i className="fas fa-user about-icon"></i>   <b><span>About</span> Me</b>
        
        </div>

      <div className="about-container">
        {/* Left side for card with photo */}
        <div className="about-left card"> 
            <img src={profileImg} alt="Aashik" />
        </div> 

        {/* Right side with Description */}
        <div className="about-right">
          <h3>I'm Aashik</h3>
          <h4>Front-End Developer</h4>
          <p>
            I am a Front-End developer living in Kathmandu, Nepal. I am currently studying engineering in IT and passionate about improving my coding skills, building responsive websites and learning new technologies. I love creating clean UI and exploring design patterns. 
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:aashiqpoudel124@gmail.com">aashiqpoudel124@gmail.com</a>
          </p>
          <p>
            <strong>Place:</strong> Kathmandu, Nepal
          </p>
          <a
            href="https://drive.google.com/file/d/1A_SywDnF5esIMBAd8dlJ4JBcncTlvW46/view?usp=drive_link"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <i className="fa-solid fa-circle-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
