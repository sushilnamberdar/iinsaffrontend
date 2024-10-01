import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BiUser, BiEnvelope, BiPhone, BiMapPin, BiKey, BiShow, BiHide } from 'react-icons/bi';
import { Link, useSearchParams } from 'react-router-dom';
import { BaseUrl } from '../util/util';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles


const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams(); // For retrieving URL params
  const [joinAs, setJoinAs] = useState('');
  const [joinAsUser, setJoinAsUser] = useState('') // Track the 'Join As' value
  const [name, setName] = useState(''); // Track the 'Name' value
  const [email, setEmail] = useState(''); // Track the 'Email' value
  const [phone, setPhone] = useState(''); // Track the 'Phone' value
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState(''); // Track the 'Password' value
  const [confirmPassword, setConfirmPassword] = useState(''); // Track the 'Confirm Password
  const [gender, setGender] = useState('');

  useEffect(()=> {
    document.title = 'Registration'
  },[])

  // Get 'as' value from the URL query parameters
  const asValueFromUrl = parseInt(searchParams.get('as'), 10); // Parse 'as' from the URL

  // Define the options for the dropdown
  const options = [
    { value: 1, label: 'Reporter' },
    { value: 2, label: 'Advertiser' },
    { value: 3, label: 'Influencer' },
  ];
  useEffect(() => {
    const joinAsNumber = parseInt(joinAs, 10); // Ensure it's a number
    if (joinAsNumber === 1) {
      setJoinAsUser('Reporter');
    } else if (joinAsNumber === 2) {
      setJoinAsUser('Advertiser');
    } else if (joinAsNumber === 3) {
      setJoinAsUser('Influencer');
    }
  }, [joinAs]);

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


  const registeruser = async () => {
    // Basic validation
    if (!name.trim()) {
      toast.error("Name is required", { position: "top-right" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      toast.error("Email is required", { position: "top-right" });
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email", { position: "top-right" });
      return;
    }

    if (!phone.trim()) {
      toast.error("Phone number is required", { position: "top-right" });
      return;
    } else if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits", { position: "top-right" });
      return;
    }

    if (!gender) {
      toast.error("Please select a gender", { position: "top-right" });
      return;
    }


    if (!state.trim()) {
      toast.error("State is required", { position: "top-right" });
      return;
    }

    if (!city.trim()) {
      toast.error("City is required", { position: "top-right" });
      return;
    }


    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", { position: "top-right" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-right" });
      return;
    }

    try {
      const response = await axios.post(`${BaseUrl}registerUser`, {
        userName: name,
        userEmail: email,
        userPassword: password,
        phoneNumber: phone,
        userState: state,
        userCity: city,
        joinAs: joinAsUser,
        gender: gender
      });
      console.log(response);
      toast.success("Registration successful", { position: "top-right" });
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Error during registration. Please try again.", { position: "top-right" });
    }
  };


  console.log(name, email, joinAsUser, joinAs, password, gender, city, state, phone)

  return (
    <div className="min-h-screen flex items-center justify-center py-4 bg-gray-100">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

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
                  value={name} // Controlled value
                  onChange={(e) => setName(e.target.value)} // Update state
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
                  value={email} // Controlled value
                  onChange={(e) => setEmail(e.target.value)} // Update state
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
                  value={phone} // Controlled value
                  onChange={(e) => setPhone(e.target.value)} // Update state
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">Gender</label>
              <div className="flex items-center border border-gray-300 rounded">
                <select
                  className="flex-grow p-2 outline-none"
                  value={gender} // Controlled value
                  onChange={(e) => setGender(e.target.value)} // Update state
                  required
                >
                  <option value="">Select Gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>


            {/* State */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">State</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiMapPin /></span>
                <select
                  className="flex-grow p-2 outline-none"
                  value={state} // Controlled value
                  onChange={(e) => setState(e.target.value)} // Update state
                  required
                >
                  <option>Select State...</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
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


            {/* City */}
            <div className="col-span-1 md:col-span-1">
              <label className="block mb-1">City</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="p-2 text-gray-500"><BiMapPin /></span>
                <input
                  type="text"
                  className="flex-grow p-2 outline-none"
                  placeholder="Enter your city"
                  value={city} // Controlled value
                  onChange={(e) => setCity(e.target.value)} // Update state
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
                  value={password} // Controlled value
                  onChange={(e) => setPassword(e.target.value)} // Update state
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
                  type="text"
                  className="flex-grow p-2 outline-none"
                  placeholder="Confirm your password"
                  value={confirmPassword} // Controlled value
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update state
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 text-center mt-4">
              <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default form submission
                  registeruser();
                }}
              >
                Register
              </button>
              <p className="mt-2 text-gray-600">
                Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
              </p>
            </div>

          </form>
        </section>
      </div>
    </div>
  );
};

export default Registration;
