import React from 'react';
import '../../styles/Home/Faq.css';

const Faq = () => {
    return (
        <section id="faq">
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
                {[
                    { question: 'How much time does it take?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { question: 'What is your class naming convention?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { question: 'How do you communicate?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { question: 'I have a bigger project. Can you handle it?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                ].map((faq, index) => (
                    <details key={index}>
                        <summary>{faq.question}</summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Faq;
