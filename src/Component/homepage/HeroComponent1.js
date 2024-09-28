import React from 'react';
import { Link } from 'react-router-dom';

import heroimage from './images/hero-3-shape.png'
import iinsafhomeimg from './images/iinsaf-home.jpeg'

const HeroComponent1 = () => {
    return (
        <section className="hero-s3 flex items-center justify-center lg:h-[80vh] ">
            <div className='flex w-[80%]'>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content space-y-14 ">
                        <div className=" flex items-center justify-center flex-wrap text-center space-y-2 space-x-10">
                            <Link to="/advertiser/register" className="btn btn-s1">Join as Advertiser</Link>
                            <Link to="/social/register?as=0" className="btn btn-s1">Join as Influencer</Link>
                            <Link to="/social/register?as=1" className="btn btn-s1">Join as Reporter</Link>
                        </div>
                        <h2 className="content-sh">A federation of Social Media Reporters and Advertisers</h2>
                        <h1 className="content-h">Welcome to <span style={{ color: 'red' }}>ii</span>nsaf</h1>
                        <p className="content-d">Social media reporters and advertisers crafting compelling narratives to engage and influence audiences.</p>
                        <div className="text-center space-y-2 space-x-10">
                            <a id="ContentPlaceHolder1_post_lead_hl" className="btn btn-s1" href="https://www.iinsaf.com/advertiser/">+ Post Lead</a>
                            <a id="ContentPlaceHolder1_book_conference_hl" className="btn btn-s1" href="https://www.iinsaf.com/advertiser/" style={{ background: '#000 !important' }}>+ Paid Conference</a>
                            <Link to="/contact" className="btn btn-s1">Free Conference</Link>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <img src={heroimage} alt="Description of the image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={iinsafhomeimg} alt="Decorative shape"/>
            </div>
            </div>
        </section>
    );
};

export default HeroComponent1;
