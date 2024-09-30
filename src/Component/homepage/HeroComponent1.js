import React from 'react';
import { Link } from 'react-router-dom';

import heroimage from './images/hero-3-shape.png'
import iinsafhomeimg from './images/iinsaf-home.jpeg'

const HeroComponent1 = () => {
    return (
        <section className="hero-s3 flex items-center justify-center w-full">
            <div className='flex w-[80%]'>
                <div className="container  ">
                    <div className="flex items-center justify-center">
                        <div className=" space-y-14 flex flex-col items-center justify-center ">
                            <div className="text-center space-y-2 space-x-10">
                                <Link to="/register?as=2" className="btn btn-s1 ml-10 ">Join as Advertiser</Link>
                                <Link to="/register?as=3" className="btn btn-s1">Join as Influencer</Link>
                                <Link to="/register?as=1" className="btn btn-s1">Join as Reporter</Link>
                            </div>
                            <h2 className="content-sh">A federation of Social Media Reporters and Advertisers</h2>
                            <h1 className="content-h">Welcome to <span style={{ color: 'red' }}>ii</span>nsaf</h1>
                            <p className="content-d">Social media reporters and advertisers crafting compelling narratives to engage and influence audiences.</p>
                            <div className="text-center space-y-2 space-x-10">
                                <Link id="ContentPlaceHolder1_post_lead_hl" className="btn btn-s1" to={'/login'}>+ Post Lead</Link>
                                <Link id="ContentPlaceHolder1_book_conference_hl" className="btn btn-s1" to={'/login'} style={{ background: '#000 !important' }}>+ Paid Conference</Link>
                                <Link to="/contact" className="btn btn-s1">Free Conference</Link>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                            <div className="img">
                                <img src={heroimage} alt="Description of the image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  hidden  h-auto  lg:block backgroundimg">
                    <img src={iinsafhomeimg} alt="Decorative shape" />
                    <div className='backgroundimg'>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default HeroComponent1;
