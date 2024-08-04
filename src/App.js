import React, { useState, useEffect } from 'react';
import './App.css';
import python from './images/python_logo.png';
import java from './images/java_logo.png';
import javascript from './images/javascript_logo.png';
import html from './images/html_logo.png';
import css from './images/css_logo.png';
import react from './images/logo192.png';
import git from './images/git_logo.png';
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
        <a href="#home" onClick={() => {window.scroll({top:0, behavior:'smooth'});}}>Home</a>
        <a href="#about" onClick={() => {window.scrollTo({top: 800, behavior:'smooth'})}}>About</a>
        <a href="#projects" onClick={() => {window.scrollTo({top: 1400, behavior:'smooth'})}}>Projects</a>
      </div>
      <div className="topnav-right">
        <a href="https://www.linkedin.com/in/jackson-garr-450075267/" target='_blank' className="fa fa-linkedin"></a>
        <a href="https://github.com/McBreezy0" target="_blank" className="fa fa-github"></a>
        <a href="mailto:jmgarr13@gmail.com" className="fa fa-envelope"></a>
        {/*<a href="garrjacksonresume.docx" download className="fa fa-clipboard"></a>*/}
      </div>
      </div>
      <div className="container">
      <Fade top>
      <div id="background1" className="side" style={{ width }}>
        <p className="title">Hello</p>
      </div>
      <div id="background2" className="side">
        <p className="title">My Name is Jackson Garr</p>
      </div>
      </Fade>
      {/*<div className="bg">*/}
        <div className="about">
        <Fade>
          <h2>About Me</h2>
          </Fade>
        </div>

    <Fade>
    <div className="content">
      <div className="Bio">
        <p>I am a recent college graduate from Dallas Baptist University with a passion for creating new projects. Over the course of my academic journey I have devled into all areas of computer science, web development and software engineering being the areas of study I have found the most rewarding. I have learned so many things over the course of my studies and plan to continue sharpening my skills as a coder and designer.</p>
        <p>When I am not coding or working on projects, I am spending my time playing guitar, practicing photography, training for the next half-marathon, or enjoying a new movie or game.</p>
      </div>
      <div className='Skills'>
        <h2>Skills:</h2>
        <img src={python} alt='Python'></img>
        <img src={java} alt='Java'></img>
        <img src={html} alt='HTML'></img>
        <img src={css} alt='CSS'></img>
        <img src={javascript} alt='JavaScript'></img>
        <img src={react} alt='React'></img>
        <img src={git} alt='Git'></img>
      </div>
    </div>
  </Fade>
        
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
            <p>Just A Normal Conversation was my senior project in college. This app utilized the OpenAI and Google Gemini APIs to simulate a conversation between them. A topic could be typed into the text box and the AIs would have a back and forth conversation.</p>
            <h3>Technologies:</h3>
            <p>Python, HTML, CSS, OpenAI/Gemini APIs</p>
            <a href="https://github.com/McBreezy0/AIConvo" target='_blank' className='card-button'>Link to Code</a>
          </div>
        </div>
        <div className="card card2">
          <div className="card-content">
            <h2>Next Level Intramurals</h2>
            <p>Next Level Intramurals was a group project in my software engineering course in college. The website was made to be a way to track intramural sports at our college. It included the ability to create profiles, teams, sports, and games schedules.</p>
            <h3>Technologies:</h3>
            <p>React, CSS, SQL, JavaScript </p>
            <a href="https://github.com/Fiery-Warrior/NextLevel-Intramurals" target='_blank' className='card-button'>Link to Code</a>
            </div>
          </div>
        <div className="card card3">
          <div className="card-content">
            <h2>CityScope</h2>
            <p>CityScope was a project for a web development class. The website's goal was to be a hub for fun areas, resturaunts, and activities in the Dallas/Fort Worth area.</p>
            <h3>Technologies:</h3>
            <p>HTML, CSS, JavaScript</p>
            <a href="#" className='card-button'>Link</a>
            </div>
          </div>
        {/*<div className="card card4">
          <div className="card-content">
            <p>Hello</p>
            <a href="#" className='card-button'>Link</a>
          </div>
        </div>*/}
      </div>
      </Fade>
      </div>
    </body>

  );
}

export default App;