import React, { useState, useEffect } from 'react';
import './App.css';
import Fade from "react-reveal/Fade";

function App() {
  const [width, setWidth] = useState('50%'); // Initialize with 50% width or any default value

  useEffect(() => {
    const handleOnMove = (e) => {
      const p = (e.clientX / window.innerWidth) * 100;
      setWidth(`${p}%`);
    };

    const handleMouseMove = (e) => handleOnMove(e);
    const handleTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);


  return (
    <body>
      <div className="topnav">
        <div className="topnav-left">
        <a className="active" href="#home" onClick={() => {window.scroll({top:0, behavior:'smooth'});}}>Home</a>
        <a href="#about" onClick={() => {window.scrollTo({top: 800, behavior:'smooth'})}}>About</a>
        <a href="#projects" onClick={() => {window.scrollTo({top: 1800, behavior:'smooth'})}}>Projects</a>
      </div>
      <div className="topnav-right">
        <a href="https://www.linkedin.com/in/jackson-garr-450075267/" target='_blank' className="fa fa-linkedin"></a>
        <a href="https://github.com/McBreezy0" target="_blank" className="fa fa-github"></a>
        <a href="mailto:jmgarr13@gmail.com" className="fa fa-envelope"></a>
        <a href="#" className="fa fa-clipboard"></a>
      </div>
      </div>
      <div className="container">
      <div id="background1" className="side" style={{ width }}>
        <p className="title">Hello</p>
      </div>
      <div id="background2" className="side">
        <p className="title">My Name is Jackson Garr</p>
      </div>
      <div className="bg">
        <div className="about">
        <Fade>
          <h2>About Me</h2>
          </Fade>
        </div>
        <div className="content">
          <img src='/gristmill_self.jpg' alt='selfie' className="side-img"></img>
        <p>I am a recent college graduate from Dallas Baptist University with a passion for creating innovative solutions through technology. During my academic journey, I have delved into various areas of computer science, with a particular enjoyment for data analysis, web development, and software engineering. These experiences have equipped me with a diverse skill set and a strong foundation in the field. My drive to constantly learn has encouraged me to seek out new challenges and discover creative solutions to complex problems. My goal is to find a forward-thinking company where I can leverage my interests and skills to make a meaningful impact. I am eager to contribute to a team that values innovation and collaboration, and where I can continue to learn and develop as a professional. Thank you for visiting my portfolio page. Please explore my projects and feel free to reach out if you'd like to connect.</p> 
        </div>
        </div>
        
      <div className="projects">
        <Fade>
        <h2>Projects</h2>
        </Fade>
      </div>
      <Fade>
      <div className="cards">
        <div className="card card1">
          <div className="card-content">
            <h2>Just A Normal Conversation</h2>
          <p>Just A Normal Conversation was my senior project in college. This app utilized the OpenAI and Google Gemini APIs to simulate a conversation between them. A topic could be typed into the text box and the AIs would have a back and forth conversation. Additionally, the random button would choose a topic at random for them to talk about.</p>
          <a href="https://github.com/McBreezy0/AIConvo" target='_blank' className='card-button'>Link to Code</a>
          </div>
        </div>
        <div className="card card2">
        <div className="card-content">
          <h2>Next Level Intramurals</h2>
          <p>Next Level Intramurals was a group project in my software engineering course in college. The website was made to be a way to track intramural sports at our college. It included the ability to create profiles, teams, sports, and games schedules. My contributions included general web design, search features, and contact page functionality. </p>
          <a href="https://github.com/Fiery-Warrior/NextLevel-Intramurals" target='_blank' className='card-button'>Link to Code</a>
          </div>
          </div>
        <div className="card card3">
        <div className="card-content">
          <p>Hello</p>
          <a href="#" className='card-button'>Link</a>
          </div>
          </div>
        <div className="card card4">
        <div className="card-content">
          <p>Hello</p>
          <a href="#" className='card-button'>Link</a>
          </div>
        </div>
      </div>
      </Fade>
      </div>
    </body>

  );
}

export default App;