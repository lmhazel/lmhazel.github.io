import React, { useState } from "react";
import { Button } from "reactstrap";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="thank-you-form">
            <h2>Thank you!</h2>
            <div>We'll be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
    <div className="contact-form">
        <form
        action="https://formsubmit.co/leamariehazel@gmail.com"
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
            <div className="contact-styling">
                <div className="name-contact-form">
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div className="email-contact-form">
                    <input type="email" placeholder="Email" name="email" required />
                </div>
            </div>
        <div className="message-contact-form">
            <textarea placeholder="Your message" name="message" required />
        </div>
        <div className="contact-button-styling">
            <Button className="contact-button" type="submit"> Send Message </Button>
        </div>
        </form>
    </div>
  );
};

export default ContactForm;