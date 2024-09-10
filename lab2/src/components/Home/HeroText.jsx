import React from 'react';
import '../../styles/Home/Homes.css'
import Illustration from '../../image/Illustration.png'
import HowItWorks from './HowItWorks';

const HeroText = () => {
  return (
    <div>
      <section className="herotext">
        <div className="herotext-content">
          <h1>Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam voluptatem dolore, ex cum explicabo vel corrupti incidunt? Repellat deleniti consequatur optio eaque dolorem molestias debitis alias amet aut voluptas laboriosam officia veritatis et earum iure voluptatem, deserunt nisi dolores. Neque consectetur voluptas, eum corporis ullam eveniet totam numquam iure?</p>
          <a href="#services" className="btn">View our work</a>
          <a href="#services" className="textbtn">View Pricing →</a>
        </div>
        <img src={Illustration} alt="Illustration" className="hero_img" />
      </section>
    </div>
  );
}

export default HeroText;