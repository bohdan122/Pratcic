import React from 'react';
import '../../styles/Home/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="heading">
        <h2>How we work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <a href="#services">Get in touch with us →</a>
      </div>
      <div className="cards">
        <div className="card">
          <div className="number">01</div>
          <h3>Strategy</h3>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
        </div>
        <div className="card">
          <div className="number">02</div>
          <h3>Wireframing</h3>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
        </div>
        
        <div className="card">
          <div className="number">03</div>
          <h3>Design</h3>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
        </div>

        <div className="card">
          <div className="number">04</div>
          <h3>Development</h3>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;