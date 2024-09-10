import React from 'react';
import '../../styles/About Us/Features.css';
import FeatureImage from '../../image/man-in-blue-jacket-looking-at-white-board-7413916.png';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="feature1">
                    <h2>Goal focussed</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature2">
                    <h2>Continuous Improvement</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <img src={FeatureImage} alt="Presenter" className="feature-image" />
        </section>
    );
};

export default Features;
