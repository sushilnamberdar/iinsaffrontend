import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import iinsafimg from '../images/iinsaf-home.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../util/util';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Tostify

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginhandel = async () => {
    if (!email || !password) {
      toast.error('Please fill in both email and password'); // Show toast notification
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address'); // Show toast notification
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      const response = await axios.post(`${BaseUrl}loginUser`, { userEmail: email, userPassword: password });
      
      // Assuming the server returns a success response with a token
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Store token
        toast.success('Login successful!'); // Show success notification
        // Add a delay before navigation to ensure the toast is visible
        setTimeout(() => {
          navigate('/userdashboard'); // Redirect after successful login
        }, 2000); // Adjust the delay time as needed
      } else {
        toast.error('Login failed. Please check your credentials.'); // Handle unexpected response
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.'); // Show error notification
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 loginbgimg">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg max-w-4xl w-full">
        <div className="p-8 flex-1 flex flex-col justify-center">
          <div className="pb-6">
            <h5 className="text-2xl font-semibold text-center">Login to Your Account</h5>
            <p className="text-center text-gray-500 text-sm">Enter your username & password to login</p>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="yourUsername" className="block text-sm font-medium text-gray-700">Username *</label>
              <div className="flex items-center border rounded-md shadow-sm mt-1">
                <span className="inline-flex items-center px-3 border-r bg-gray-50 text-gray-500 text-sm">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <input
                  name="username"
                  type="text"
                  id="username"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="yourPassword" className="block text-sm font-medium text-gray-700">Password *</label>
              <div className="flex items-center border rounded-md shadow-sm mt-1">
                <span className="inline-flex items-center px-3 border-r bg-gray-50 text-gray-500 text-sm">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="flex-1 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="px-3 py-2 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <Link to='/forgotePassword' className='text-blue-600'>Forgotten password</Link>
            </div>

            <div>
              <button
                className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={loginhandel}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500">
              Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Create an account</Link>
            </p>
          </div>
        </div>

        <div className="hidden md:block flex-1">
          <img src={iinsafimg} alt="Login Visual" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
