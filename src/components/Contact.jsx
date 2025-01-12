import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,  // Maps to {{user_name}}
      message: formData.message, // Maps to {{message}}
      reply_to: formData.email,  // Maps to {{reply_to}}
    };

    emailjs
      .send('service_hl117t9', 'template_9yucuz7', templateParams, 'lg1lsEnZQAebsbesZ')
      .then(
        () => {
          setSubmitMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Failed to send message:', error);
          setSubmitMessage('Failed to send message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-textarea"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" disabled={isSubmitting} className="form-button">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
