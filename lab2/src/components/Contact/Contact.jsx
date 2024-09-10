import React from 'react';
import '../../styles/Contact.css';

const Contact = () => {
  return (
    <main>
      <div className="contact-container">
        <h1 className='title'>Contact Us</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <form>
          <div className="form-group">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your question here" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
