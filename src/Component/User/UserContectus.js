import React from "react";

const UserContactUs = () => {
    return (
        <div
          className="min-h-screen bg-cover bg-center flex justify-center items-center p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTQ1MDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjg1Mzc4OTQx&ixlib=rb-1.2.1&q=80&w=1080')", // Background image URL
          }}
        >
          <div className="bg-white/20 backdrop-blur-lg p-10 rounded-xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row transition-transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
            {/* Left Side: Image */}
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 pr-6 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1543280554-642953527bf5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact Us"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-1 hover:shadow-2xl"
              />
              <p className="text-white text-lg text-center">
                We’d love to hear from you! Feel free to drop us a message anytime.
              </p>
            </div>
    
            {/* Right Side: Contact Form */}
            <div className="w-full md:w-1/2 bg-white/40 backdrop-blur-md p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
                Get In Touch
              </h2>
              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/70 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all pl-10"
                      placeholder="Your Name"
                    />
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
    
                {/* Email Input */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-white/70 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all pl-10"
                      placeholder="Your Email"
                    />
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
    
                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full px-4 py-2 bg-white/70 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all pl-10"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                    <span className="absolute inset-y-0 left-3 flex items-start pt-2 text-gray-400">
                      <i className="fas fa-comment"></i>
                    </span>
                  </div>
                </div>
    
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-lg hover:shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      );
};

export default UserContactUs;
