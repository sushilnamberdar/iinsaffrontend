import React from 'react';
import advertiser from './images/advertiser.jpg'

const Advertiserment = () => {
  return (
    <div>
       <section className="about-s4" style={{ paddingTop: '100px' }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div>
                        <div>
                            <div>
                                <img src={advertiser} className="img-fluid" alt="Advertiser"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 pb-5" style={{ paddingBottom: '50px' }}>
                    <div className="about-s4__content">
                        <span className="s-sub-title">For Advertisers</span>
                        <h2 className="s-title">Tap into the Power of Influencer Marketing</h2>
                        <p className="desc" style={{ textAlign: 'justify' }}>
                          As an advertiser, leverage our platform to connect with influencers and promote your brand effectively. 
                          Post your requirements, select influencers matching your audience, and collaborate to achieve your marketing goals seamlessly.
                        </p>
                        <strong>Opportunity Posting</strong>
                        <p style={{ textAlign: 'justify' }}>
                          Post your requirements and target locations to connect with relevant influencers matching your brand's audience.
                        </p>
                        <strong>Influencer Selection</strong>
                        <p style={{ textAlign: 'justify' }}>
                          Browse and select influencers based on their demographics, audience reach, and engagement metrics to ensure maximum impact for your campaign.
                        </p>
                        <strong>Collaboration and Results</strong>
                        <p style={{ textAlign: 'justify' }}>
                          Collaborate with selected influencers, track campaign performance, and achieve your marketing goals effectively. 
                          Pay influencers based on the agreed terms, ensuring fair compensation for their efforts.
                        </p>
                        <a href="https://www.iinsaf.com/advertiser/" target="_blank" className="btn btn-s3">Join as Advertiser</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Advertiserment;
