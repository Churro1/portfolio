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
        <img className="fancy-fade" src={headshot} alt="Charlie Miner" />
      </div>

      <div className="description">
        <p>
          I am a software engineer with a passion for creating innovative solutions to complex problems. I have experience in full-stack development, and I am always eager to learn new technologies and improve my skills.
        </p>
        <p>
          I am currently looking for new opportunities to apply my skills and contribute to exciting projects. If you are interested in collaborating, please feel free to reach out!
        </p>
      </div>
    </>
  );
}

export default Landing;