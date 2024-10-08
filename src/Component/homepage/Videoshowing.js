import React from 'react';

const Videoshowing = () => {
  return (
    <div className="flex  flex-col lg:flex-row md:space-x-4 p-4">
      {/* Information Section on the Left */}
      <div className="flex-1 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-2">Video Title</h2>

        {/* Overview Section */}
        <h3 className="text-xl font-medium mb-2">Overview</h3>
        <p className="text-gray-700 mb-4">
          This is a brief description of the video. Here you can provide more details about the content of the video, its purpose, and any other relevant information that viewers might find useful.
        </p>

        {/* User Testimonial Section */}
        <h3 className="text-xl font-medium mb-2">User Testimonials</h3>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
          "This video greatly enhanced my understanding of the subject! Highly recommended!" - A Satisfied Viewer
        </blockquote>
      </div>

      {/* Video Section on the Right */}
      <div className="flex-1">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
          alt="Sample Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videoshowing;
