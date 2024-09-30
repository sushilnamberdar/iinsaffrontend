import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import iinsafimg from '../images/iinsaf-home.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 loginbgimg ">
      {/* Login Box */}
      <div className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg max-w-4xl w-full">
        {/* Left Side: Login Form */}
        <div className="p-8 flex-1 flex flex-col justify-center">
          <div id="UpdatePanel1">
            <div className="pb-6">
              <h5 className="text-2xl font-semibold text-center">Login to Your Account</h5>
              <p className="text-center text-gray-500 text-sm">Enter your username & password to login</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="yourUsername" className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <div className="flex items-center border rounded-md shadow-sm mt-1">
                  <span className="inline-flex items-center px-3 border-r bg-gray-50 text-gray-500 text-sm">
                    <FontAwesomeIcon icon={faUserCircle} /> {/* FontAwesome Icon */}
                  </span>
                  <input
                    name="username"
                    type="text"
                    id="username"
                    className="flex-1 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="yourPassword" className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <div className="flex items-center border rounded-md shadow-sm mt-1">
                  <span className="inline-flex items-center px-3 border-r bg-gray-50 text-gray-500 text-sm">
                    <FontAwesomeIcon icon={faKey} /> {/* FontAwesome Icon */}
                  </span>
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="flex-1 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="px-3 py-2 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> {/* FontAwesome Icon */}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
              <Link to='/forgotePassword' className='text-blue-600' >Forgotten password</Link>
              </div>

              <div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Login
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Create an account</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block flex-1">
          <img src={iinsafimg} alt="Login Visual" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
