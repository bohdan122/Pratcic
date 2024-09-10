import React from 'react';
import '../../styles/Home/Projects.css'
import Card1 from '../../image/Card.svg'
import Card2 from '../../image/Rectangle 1313.svg'
import Card3 from '../../image/Card (1).svg'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-heading">
        <h2>View our projects</h2>
        <a href="#" className="view-more">View More →</a>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <img src={Card1} alt="Project 1" />
          <div className="project-info">
            <h3>Workhub office Webflow Design</h3>
            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
            <a href="#" className="view-project">View project →</a>
          </div>
        </div>
        
        <div className="project-card">
          <img src={Card2} alt="Project 2" />
          <div className="project-info">
            <h3>Workhub office Webflow Design</h3>
            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
            <a href="#" className="view-project">View portfolio  →</a>
          </div>
        </div>

        <div className="project-card">
          <img src={Card3} alt="Project 3" />
          <div className="project-info">
            <h3>Workhub office Webflow Design</h3>
            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;