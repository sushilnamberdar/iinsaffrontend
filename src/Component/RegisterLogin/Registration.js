import React, { useState } from 'react';
import { BiUser, BiEnvelope, BiPhone, BiMapPin, BiKey, BiShow, BiHide } from 'react-icons/bi';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  
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
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">State</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiMapPin /></span>
                <select className="flex-grow p-2 outline-none" required>
                  <option selected>Select State...</option>
                  {/* List of Indian states */}
                  <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
                  <option value="Daman & Diu">Daman & Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
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
            <div className="col-span-1 text-center mt-4">
              <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition">
                Register
              </button>
              <p className="mt-2 text-gray-600">Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Registration;
