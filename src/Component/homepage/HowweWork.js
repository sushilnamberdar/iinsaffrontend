import React from 'react'

const HowweWork = () => {
    return (
        <div className='mt-10' >
            <h4 style={{ color: "blue" }} data-aos="zoom-in" >How We Work</h4>

            <h3>Our Work Process</h3>

            <div className='hero-shapes'>
                <div className="shape-container">
                    <div className="shape1" data-aos="">

                    </div>

                    <div className='shape-content' data-aos="fade-up" >
                        <h3>Choose Influencer</h3>
                        <p>Browse through the extensive list of social media influencers and select the ones suitable for your advertisement.</p>
                    </div>
                </div>
                <div className="shape-container">
                    <div className="shape1">

                    </div>

                    <div className='shape-content' data-aos="fade-up">
                        <h3>Post Requirement</h3>
                        <p>Post your advertisement requirements, including the campaign details, target audience, and any specific instructions for the influencers.</p>
                    </div>
                </div>
                <div className="shape-container">
                    <div className="shape2">

                    </div>

                    <div className='shape-content' data-aos="fade-up" id='trigger-element'>
                        <h3>Check Your Report</h3>
                        <p>Once the influencers agree to your terms and conditions, your advertisement is set to go live.</p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default HowweWork
