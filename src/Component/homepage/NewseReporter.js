import React from 'react';
import image from './images/reporter.jpg'

const NewseReporter = () => {
  return (
    <div className='flex items-center justify-center '>
      <section className="about-s4 w-[80%]">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 pb-5">
              <div className="about-s4__content">
                <span className="s-sub-title">For News Reporters</span>
                <h2 className="s-title">Join the Future of News Reporter Monetization!</h2>
                <p className="desc" style={{ textAlign: 'justify' }}>
                  As an influencer, joining our platform opens up exciting opportunities for you to monetize your social media presence. Here's how it works:
                </p>
                <strong>Registration</strong>
                <p style={{ textAlign: 'justify' }}>
                  Sign up and provide URLs for your social media channels (Facebook, Twitter, Instagram, YouTube) along with your city location.
                </p>
                <strong>Opportunity Selection</strong>
                <p style={{ textAlign: 'justify' }}>
                  Browse and select opportunities posted by advertisers that match your interests and audience.
                </p>
                <strong>Execution and Compensation</strong>
                <p style={{ textAlign: 'justify' }}>
                  Accept opportunities, create content as required, and earn compensation based on your performance. A small commission is deducted, and the remaining amount is credited to your account.
                </p>
                <a href="https://www.iinsaf.com/social/" target="_blank" rel="noopener noreferrer" className="btn btn-s3">Join as Reporter</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="">
                <div className="">
                  <div className="pt-3">
                    <img src={image} className="img-fluid" alt="Reporter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewseReporter;
