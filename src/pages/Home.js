import React from "react";
import { Button, NavLink } from "reactstrap";
import { useEffect } from "react";
import ContactForm from "./Contact";


const Home = () => {
    useEffect(() => {
        if (document) {
          const stylesheet = document.createElement("link");
          stylesheet.rel = "stylesheet";
          stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
    
          document.head.appendChild(stylesheet);
        }
      }, []);

  return (
    <>
        <div className="header">
            <ul>
                {/* <li className="left-side-header"><a href="#home">Lea Hazel</a></li> */}
                <div className="right-side-header">
                <li className="about-header"><a href="#about">About</a></li>
                <li className="projects-header"><a href="#project">Projects</a></li>
                <li className="contact-header"><a href="#contact">Contact</a></li>
                </div>
            </ul>
        </div>

        <div id="home" className="homepage-background">
            <h3 className="header1">Welcome, my name is</h3>
            <h1 className="header2">Lea Hazel</h1>

            <div>
                <div className="homepage-spacing">
                    <img className= "line-image"></img>
                    <h5 className="header3">full-stack web developer</h5>
                    <Button className="resume-button">
                        <NavLink href="https://docs.google.com/document/d/1Um8Nay2oLFJP6k31Lp2WXfAzdJcBBTsFlt3m_zTV_eo/edit">
                            RESUME
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>

        <div id="about" className="aboutme-background">
            <div className="aboutme-styling">
                <div>
                <h3 className="aboutme">About Me</h3>
                <p1 className="aboutme-para">
                    <span>
                        My name is Lea (LEE-uh) Hazel and I’m a full stack web developer with
                        experience in JavaScript, HTML, CSS, Ruby, SQL, Python, R, React,
                        and Ruby on Rails.
                    </span>

                    <span className="second-line">
                        After obtaining my Bachelor’s in Sociology from the University of
                        California, Berkeley, I found a passion for the integration of
                        technology in society and want to foster a diverse and inclusive
                        space in the tech industry. I am currently an intern at Ceatus Media Group where I use Ruby on Rails to integrate UI features to internal tools. 
                    </span>

                    <span className="second-line">
                        I spend my free time working on coding projects, listening to new music, playing badminton, and watching cute videos of cats and dogs.
                    </span>
                </p1>
                </div>
                <img className="cursor-image"></img>
            </div>
        </div>

        <div id="project" className="project-background">
            <h3 className="project-title">Projects</h3>
            <hr className="h_line"></hr>

            <div className="projects-display">
                    <a href="https://moving-app.onrender.com/" className="pack-rat"></a>
                    <a href="https://github.com/lmhazel/piglatin-translator" className="project-two"></a>      
                    {/* <a href="https://moving-app.onrender.com/" className="project-three"></a> */}
            </div>
        </div>

    
        <div id="contact" className="contact-background">
            <h3 className="contact-title">Want to say hi?</h3>
            <ContactForm />
            <div className="contact-images">
                <a href="https://github.com/lmhazel" className="github-image"></a>
                <a href="https://www.linkedin.com/in/leamhazel" className="linkedin-image"></a>
                <a href="mailto:leamariehazel@gmail.com" className="email-image"></a>
            </div>
        </div>
    </>
  );
};

export default Home;
