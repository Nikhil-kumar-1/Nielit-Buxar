import React from "react";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="form-container">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" required />
          </div>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="map-container">
        <img
          src="https://images.unsplash.com/photo-1721109890030-00faaa68981f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" // Replace with your map image
          alt="Map of New York City"
        />
      </div>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Address: 198 West 21th Street,</p>
          <p>Suite 721 New York NY 10016</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <p>Phone: + 1235 2355 98</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>Email: info@yoursite.com</p>
        </div>
        <div className="info-item">
          <i className="fas fa-globe"></i>
          <p>Website yoursite.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
