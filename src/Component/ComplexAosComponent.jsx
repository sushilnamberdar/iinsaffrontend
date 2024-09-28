import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ComplexAOSComponent = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Offset (in px) from the original trigger point
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Animation easing pattern
      delay: 50, // Delay in ms to start animation after scrolling
      once: false, // Whether animation should happen only once
      mirror: true, // Repeat the animation on scrolling up or down
      anchorPlacement: 'top-center', // Defines which position should trigger the animation
    });
  }, []);

  return (
    <div>
      {/* Section with multiple elements, each with custom AOS settings */}
      <section>
        {/* Complex sequence of animations with different delay and durations */}
        <div
          className="aos-element"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <h1>Fade-up Animation (Delayed by 100ms, 2s duration)</h1>
        </div>

        <div
          className="aos-element"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-easing="ease-in-back"
        >
          <h1>Zoom-in with Back Easing (300ms delay)</h1>
        </div>

        <div
          className="aos-element"
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h1>Flip-left Animation with Easing (1.5s duration, 500ms delay)</h1>
        </div>

        <div
          className="aos-element"
          data-aos="slide-right"
          data-aos-duration="2500"
        >
          <h1>Slide-right Animation (2.5s duration)</h1>
        </div>
      </section>

      {/* More animations for custom scrolling behavior */}
      <section>
        <div
          className="aos-element"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="400"
          data-aos-easing="ease-out-cubic"
        >
          <h1>Fade-up Animation (Offset by 400px, Ease-out-cubic)</h1>
        </div>

        <div
          className="aos-element"
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-delay="600"
        >
          <h1>Zoom-out Animation (3s duration, 600ms delay)</h1>
        </div>
      </section>

      {/* Adding mirroring effect */}
      <section>
        <div
          className="aos-element"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-mirror="true"
        >
          <h1>Fade-right Animation with Mirror Effect (Repeats on scroll up/down)</h1>
        </div>

        <div
          className="aos-element"
          data-aos="flip-right"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          <h1>Flip-right Animation (2s duration, 400ms delay)</h1>
        </div>
      </section>
    </div>
  );
};

export default ComplexAOSComponent;
