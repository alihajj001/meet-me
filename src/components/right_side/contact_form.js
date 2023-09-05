import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact_form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2frkbg",
        "template_l7li6sh",
        form.current,
        "eyVaSJvDzkLVTNSXZ"
      )
      .then(
        (result) => {
          const contactInfoContainer = document.querySelector(
            ".contact-info-container"
          );
          contactInfoContainer.innerHTML = `
          <div class="text-center">
            <h1>Thank you for contacting us!</h1>
            <p>We have received your message and will get back to you as soon as possible.</p>
          </div>
        `;
        },
        (error) => {
          const contactInfoContainer = document.querySelector(
            ".contact-info-container"
          );
          contactInfoContainer.innerHTML = `
          <div class="text-center">
          <h1>Oops, something went wrong!</h1>
          <p>
            Please reach out to us via email at <a href="mailto:aliahmad.elhajj.001@gmail.com">
              <b>aliahmad.elhajj.001@gmail.com</b></a> or through <a href="https://wa.me/+96171680583"> <b>WhatsApp</b> </a> or <a href="https://www.linkedin.com/in/ali-hajj-11341a21b/"><b>LinkedIn</b></a>.
          </p>
        </div>
        `;
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-info-container col-12 row-gap-30 flex-row justify-content-center align-items-center">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="full name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn-contact-form" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact_form;
