import React from 'react';

function ContactForm() {
  return (


    <div className="contact-form">
      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/charliejminer@gmail.com" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br></br>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;