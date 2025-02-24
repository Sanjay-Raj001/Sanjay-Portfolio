import React, { useRef, useState } from 'react';
import { CgMail } from "react-icons/cg";
import Reveal from './Reveal';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // For setting the message type (success or error)

  // Email validation regex (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the email field
    const email = e.target.email.value;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000); // Hide the message after 3 seconds
      return;
    }

    // Log environment variables to ensure they are being read
   
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      () => {
        setMessage("Message sent successfully!");
        setMessageType("success");
        formRef.current.reset(); // Reset the form after successful submission
      },
      (error) => {
        setMessage("Failed to send the message. Please try again.");
        setMessageType("error");
        console.log('FAILED...', error.text);
      }
    );

    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="relative px-6 max-w-[1000px] mx-auto md:my-12 pt-24" id="contact">
      {message && (
        <div className={`fixed top-0 left-0 w-full p-4 text-center text-white ${messageType === "success" ? "bg-green-500" : "bg-red-500"}`} style={{ zIndex: 1000 }}>
          {message}
        </div>
      )}
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Let's <span className='primary-color'>Connect</span>
              </h3>
              <div className="flex items-center justify-center">
                <CgMail className="w-[40px] h-auto text-gray-300 mr-2" />
                <p className="text-justify leading-7 w-11/12">
                  connect.sanjayraj@gmail.com
                </p>
              </div>
            </div>
          </div>
          <form
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={sendEmail}
            ref={formRef}
          >
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              name="name"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Message"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-gradient-to-br from-orange-500 to-pink-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;
