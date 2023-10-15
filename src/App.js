import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Rajula Balaji</h1>
        <p>Web Developer</p>
      </header>
      <main className="App-main">
        <section className="About" id="about">
          <h2>About Me</h2>
          <p>Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs. Committed to utilizing my skills to further the mission of a company</p>
        </section>
        <section className="Projects" id="projects">
          <h2>Projects</h2>
          <div className="Project">
            <h3>Project 1</h3>
            <p>Arduino Based College Group Project</p>
          </div>
        </section>
        <section className="Contact" id="contact">
          <h2>Contact</h2>
          <p>Email: rajula.balaji123@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rajula-balaji-16863a282/">Your LinkedIn Profile</a></p>
          <p>Github: <a href="https://github.com/balu0523">Your GitHub Profile</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
