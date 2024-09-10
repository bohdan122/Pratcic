import React from 'react';
import '../../styles/About Us/Hero.css';
import HeroImage from '../../image/group-of-people-sitting-indoors-3184360.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>Our designs solve problems</h1>
                <p>We create digital ideas that are bigger, bolder, braver and better.</p>
                <img src={HeroImage} alt="Team meeting" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
