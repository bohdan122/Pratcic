import React from 'react';
import '../../styles/Home/Features.css'

const Features = () => {
    return (
        <section id="features">
            <div className="features-heading">
                <h3>Features</h3>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <div className="features-cards">
                {[
                    { icon: '👥', title: 'Uses Client First', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                    { icon: '✔️', title: 'Two Free Revision Round', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                    { icon: '🛠️', title: 'Template Customization', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                    { icon: '🕑', title: '24/7 Support', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                    { icon: '⏱️', title: 'Quick Delivery', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                    { icon: '👐', title: 'Hands-on approach', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
                ].map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
