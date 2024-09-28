import React, { useState, useEffect } from 'react';
import reporternumberlogo from './images/Icon.svg';
import advertisersnumberlogo from './images/Icon(3).svg';

const Bannersection3 = () => {
  const [reportersCount, setReportersCount] = useState(0);
  const [advertisersCount, setAdvertisersCount] = useState(0);

  useEffect(() => {
    // Function to animate the numbers
    const incrementCount = (target, setter, duration) => {
      let start = 0;
      const end = target;
      const increment = Math.ceil(end / (duration / 10)); // Set increment step
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end; // Ensure the count stops exactly at the target
          clearInterval(timer);
        }
        setter(start); // Update the state with the new count
      }, 10); // 10ms interval for smooth animation
    };

    // Animate reporters count
    incrementCount(500, setReportersCount, 2000); // Increment to 274606 over 2 seconds

    // Animate advertisers count
    incrementCount(2000, setAdvertisersCount, 2000); // Increment to 283481 over 2 seconds
  }, []);

  return (
    <div>
      <section
        className="funfact-area-s2 funfact-area-s7"
        style={{ marginTop: '50px', marginBottom: '100px', background: '#007CFB', zIndex: 0 }}
      >
        <div className="container">
          <div className="funfact-area-s2-container" style={{ background: '#007CFB' }}>
            <div className="funfact-s2">
              <div className="icon">
                <img src={reporternumberlogo} alt="Icon" />
              </div>
              <div className="content">
                <h4>
                  <span className="number counter-item" style={{ color: '#fff' }} id="total_reporters">
                    {reportersCount.toLocaleString()}
                  </span>
                  <span className="s-fix" style={{ color: '#fff' }}>+</span>
                </h4>
                <p style={{ color: '#fff' }}>Reporters</p>
              </div>
            </div>
            <div className="funfact-s2">
              <div className="icon">
                <img src={advertisersnumberlogo} alt="Icon" />
              </div>
              <div className="content">
                <h4>
                  <span className="number counter-item" style={{ color: '#fff' }} id="total_advertisers">
                    {advertisersCount.toLocaleString()}
                  </span>
                  <span className="s-fix" style={{ color: '#fff' }}>+</span>
                </h4>
                <p style={{ color: '#fff' }}>Advertisers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannersection3;
