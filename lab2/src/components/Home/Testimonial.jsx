import React from 'react';
import '../../styles/Home/Testimonial.css';
import Mask from '../../image/Mask Group.svg'

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="testimonial-content">
                <div className="testimonial-text">
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="testimonial-quote">
                    <blockquote>
                        "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                    </blockquote>
                    <div className="testimonial-author">
                        <img src={Mask}alt="Jenny Wilson" />
                        <div>
                            <h4>Jenny Wilson</h4>
                            <span>Vice President</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-navigation">
                    <button className="prev">&lt;</button>
                    <button className="next">&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
