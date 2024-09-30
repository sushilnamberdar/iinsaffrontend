import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import WhatsAppButton from './homepage/Whatsappbutton';

const ContactUs = () => {
  return (
    <div>

      <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
        <WhatsAppButton />
      </div>
      {/* Page Banner Section */}
      <section className="bg-blue-700 banner-img" style={{ marginTop: '0px' }}>
        <div className="container mx-auto">
          <div className="row">
            <div className="content text-center py-16">
              <h1 className="text-4xl text-white font-bold">Contact Us</h1>
              <ul className="breadcrumb flex justify-center mt-4">
                <li><Link to="/" className="text-blue-500">Home</Link></li>
                <li className="mx-2">/</li>
                <li><a href="#" className="text-blue-500">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Area */}
      <section className="contact-form-area py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="s-sub-title block text-sm font-semibold text-gray-600 text-center">Contact With Us</h2>
            <h2 className="s-title text-3xl font-bold mt-2 text-gray-800 text-center">Feel Free to Get in Touch</h2>
            <div className="flex flex-col lg:flex-row mt-8">
              {/* Contact Info Section */}
              <div className="lg:w-5/12 mb-8 lg:mb-0 px-4 flex flex-col items-center justify-center">
                <div className="c-info-box-wrap w-full">
                  <a href="tel:09992396623" className="c-info-box flex items-center p-4 border rounded-lg shadow hover:bg-gray-100 transition w-full justify-center">
                    <div className="icon mr-4">
                      <FaPhoneAlt className="h-6 w-6" /> {/* Phone Icon */}
                    </div>
                    <div className="content text-center">
                      <span className="text-sm text-gray-500">Phone Number</span>
                      <h4 className="text-lg font-semibold text-gray-800">+91 99923-96623</h4>
                    </div>
                  </a>
                  <a href="mailto:b2dbdbdcc1d3d4d5c0ddc7c2f2d5dfd3dbde9cd1dddf" className="c-info-box flex items-center p-4 border rounded-lg shadow hover:bg-gray-100 transition mt-4 w-full justify-center">
                    <div className="icon mr-4">
                      <FaEnvelope className="h-6 w-6" /> {/* Email Icon */}              </div>
                    <div className="content text-center">
                      <span className="text-sm text-gray-500">Email</span>
                      <h4 className="text-lg font-semibold text-gray-800">info@yourdomain.com</h4>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="lg:w-7/12 mx-auto px-4">
                <div className="contact-form-s1 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number*"
                    required
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    required
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject*"
                    required
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    placeholder="Message here"
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg p-4 w-full hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;
