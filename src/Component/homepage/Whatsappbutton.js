// WhatsAppButton.js

import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="email-bt">
      <a 
        href="https://api.whatsapp.com/send?phone=919992396623&text=Hi" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
