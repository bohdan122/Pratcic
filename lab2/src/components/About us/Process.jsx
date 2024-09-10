import React from 'react';
import '../../styles/About Us/Process.css';

const Process = () => {
    return (
        <section className="process">
            <div className="container">
                <h2>The process we follow</h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Planning</h3>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Conception</h3>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Design</h3>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Development</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
