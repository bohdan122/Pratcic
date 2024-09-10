import React from 'react';
import '../../styles/About Us/Benefits.css';

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="container">
                <h2>The benefits of working with us</h2>
                <div className="benefits-grid">
                    <div className="benefit">
                        <div className="benefit-icon">📊</div>
                        <h3>Customize with ease</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="benefit">
                        <div className="benefit-icon">🚀</div>
                        <h3>Perfectly Responsive</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="benefit">
                        <div className="benefit-icon">🔧</div>
                        <h3>Friendly Support</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
