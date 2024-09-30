import React, { useState, useEffect } from 'react';
import { BiUser, BiEnvelope, BiPhone, BiMapPin, BiKey, BiShow, BiHide } from 'react-icons/bi';
import { Link, useSearchParams } from 'react-router-dom';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams(); // For retrieving URL params
  const [joinAs, setJoinAs] = useState(''); // Track the 'Join As' value
  
  // Get 'as' value from the URL query parameters
  const asValueFromUrl = parseInt(searchParams.get('as'), 10); // Parse 'as' from the URL
  
  // Define the options for the dropdown
  const options = [
    { value: 1, label: 'Reporter' },
    { value: 2, label: 'Advertiser' },
    { value: 3, label: 'Influencer' },
  ];

  // Update 'Join As' based on URL parameter or set a default
  useEffect(() => {
    if ([1, 2, 3].includes(asValueFromUrl)) {
      setJoinAs(asValueFromUrl);
    } else {
      setJoinAs(1); // Default to 'Reporter' if 'as' is invalid or missing
    }
  }, [asValueFromUrl]);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-4 bg-gray-100">
      <div className="container mx-auto">
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center pb-4">
            <h5 className="text-xl font-semibold">Register Your Account</h5>
            <p className="text-gray-600">Enter your details to register</p>
          </div>
          <form className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <div className="col-span-1">
              <label className="block mb-1">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiUser /></span>
                <input
                  type="text"
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiEnvelope /></span>
                <input
                  type="email"
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Phone</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiPhone /></span>
                <input
                  type="tel"
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* State */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">State</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiMapPin /></span>
                <select className="flex-grow p-2 outline-none" required>
                  <option selected>Select State...</option>
                  <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>

            {/* City */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">City</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiMapPin /></span>
                <input
                  type="text"
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>

            {/* Join As */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Join As</label>
              <div className="flex items-center border border-gray-300 rounded">
                <select
                  className="flex-grow p-2 outline-none"
                  value={joinAs}
                  onChange={(e) => setJoinAs(e.target.value)}
                  required
                >
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Password *</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiKey /></span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your password"
                  required
                />
                <span className="p-2 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <BiHide /> : <BiShow />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Confirm Password *</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiKey /></span>
                <input
                  type="password"
                  className="flex-grow p-2 outline-none"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 text-center mt-4">
              <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition">
                Register
              </button>
              <p className="mt-2 text-gray-600">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Registration;
