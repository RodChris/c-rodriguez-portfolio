import React from 'react'

import './about.css'

// About component
const About = () => {
  const technologies = [
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
  ]

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ultricies placerat.</p>
      <ul className="technology-list">
        {technologies.map((technology, index) => (
          <li key={index}>
            <i className={technology.icon}></i>
            {technology.name}
          </li>
        ))}
      </ul>
      <a href="/path/to/your/resume.pdf" download>
        <button className="download-button">Download Resume</button>
      </a>
    </section>
  );
};

export default About