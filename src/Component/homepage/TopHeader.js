import React from 'react';
import { FaBuilding, FaPhone, FaFacebook, FaTwitter, FaGooglePlus, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <header className="flex items-center justify-center bg-white flex-wrap !border-b py-1 shadow-sm mb-[1px]"  style={{
      boxShadow: '0 4px 6px rgba(255, 0, 0, 0.5)', // Shadow only at the bottom with red color
    }}>
      {/* Left Side: Contact Information */}
      <div className='w-[80%] flex items-center justify-between flex-wrap'>
        <div className="flex flex-wrap text-black">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-blue-500 transition duration-300">
              <FaBuilding className="text-blue-500 hover:text-white hover:bg-blue-600 " />
            </div>
            <a
              href="https://www.google.com/maps/dir/29.1755814,75.7279962/29.1755026,75.727792/@29.1755171,75.7253194,17z/data=!3m1!4b1!4m5!4m4!1m1!4e1!1m1!4e1?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-black text-sm"
            >
              <span className='hover:text-blue-500' ><strong>Contact:</strong> IINSAF OFFICE SUNDAR NAGAR MAIN GATE</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-blue-500 transition duration-300">
              <FaPhone className="text-blue-500 hover:text-white hover:bg-blue-500" />
            </div>
            <span className="ml-2 text-sm hover:text-blue-500"><strong>Call Us:</strong> +91 999-1992-492</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'; // Tailwind's blue-500
              e.currentTarget.children[0].style.color = 'white'; // Change icon color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.children[0].style.color = '#3b82f6'; // Tailwind's blue-500
            }}
          >
            <FaFacebook style={{ color: '#3b82f6' }} />
          </a>

          <a
            href="#"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'; // Tailwind's blue-500
              e.currentTarget.children[0].style.color = 'white'; // Change icon color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.children[0].style.color = '#3b82f6'; // Tailwind's blue-500
            }}
          >
            <FaTwitter style={{ color: '#3b82f6' }} />
          </a>

          <a
            href="#"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'; // Tailwind's blue-500
              e.currentTarget.children[0].style.color = 'white'; // Change icon color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.children[0].style.color = '#3b82f6'; // Tailwind's blue-500
            }}
          >
            <FaGooglePlus style={{ color: '#3b82f6' }} />
          </a>

          <a
            href="#"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'; // Tailwind's blue-500
              e.currentTarget.children[0].style.color = 'white'; // Change icon color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.children[0].style.color = '#3b82f6'; // Tailwind's blue-500
            }}
          >
            <FaInstagram style={{ color: '#3b82f6' }} />
          </a>

          <a
            href="#"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'; // Tailwind's blue-500
              e.currentTarget.children[0].style.color = 'white'; // Change icon color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.children[0].style.color = '#3b82f6'; // Tailwind's blue-500
            }}
          >
            <FaYoutube style={{ color: '#3b82f6' }} />
          </a>
        </div>

      </div>
    </header>
  );
};

export default TopHeader;
