import React from 'react';
import headshot from '../assets/headshot.png';
import '../styles/App.css';

function Landing() {

  return (
    <>
      <div className="title">
        <p>Hello! My name is</p>
        <h1>Charlie Miner</h1>
        <p>It is a pleasure to meet you</p>
      </div>

      <div>
        <img className="headshot" src={headshot} alt="Charlie Miner Headshot" />

      </div>

      <div className="description">
        <p>
          I am a Computer Science student at Utah State University with a strong passion for problem-solving and continuous learning. I thrive in dynamic environments and enjoy tackling complex challenges. Known for my strong work ethic and communication skills, I excel at collaborating with others both online and in person.
        </p>
        <p>
          I am currently looking for new opportunities to apply my skills and contribute to exciting projects. If you are interested in collaborating, please feel free to reach out!
        </p>
      </div>

      <div className="featured">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work!</p>
      </div>

    </>
  );
}

export default Landing;