import React from 'react';
import aboutpng from './images/about.png';
import WhatsAppButton from './homepage/Whatsappbutton';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
                <WhatsAppButton />
            </div>
            {/* Page Banner Section */}
            <section className=" banner-img" style={{ marginTop: '0px' }}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="content text-center py-16">
                            <h1 className="text-4xl text-white font-bold">About</h1>
                            <ul className="breadcrumb flex justify-center mt-4">
                                <li><Link to="/" className="text-blue-500">Home</Link></li>
                                <li className="mx-2">/</li>
                                <li><a href="#" className="text-blue-500">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" pt-24 pb-24">

                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <div className="">
                                <div className="shape">
                                    <img src={aboutpng} alt="About Insaaf" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:pl-8">
                            <div className="about-s6__content mt-6 md:mt-10 lg:mt-20"> {/* Responsive margin top */}
                                <span className="s-sub-title block text-center lg:text-left">International Influencing News Social Media Advertisement Federation</span>
                                <h2 className="s-title text-center lg:text-left">About iinsaf</h2>
                                <p className="desc text-justify">
                                    Insaaf is a leading platform dedicated to promoting social justice through innovative technological solutions. We strive to empower individuals and communities by providing access to resources, education, and opportunities. Our mission is to create a more equitable and inclusive society where everyone has the chance to thrive.
                                </p>
                                <ul className="i-list list-disc pl-5 mt-4">
                                    <li className="flex items-center mb-2">
                                        <span className="icon"><i className="fa-solid fa-check" /></span>
                                        <span className="text ml-2">Promote your business product</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="icon"><i className="fa-solid fa-check" /></span>
                                        <span className="text ml-2">Growing your business</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="icon"><i className="fa-solid fa-check" /></span>
                                        <span className="text ml-2">Best client satisfaction</span>
                                    </li>
                                </ul>
                                <div className="content-b text-center mt-4">
                                    <Link to='/contact' className="btn btn-s1 wow animate__animated animate__fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <h4 className="text-xl font-semibold">iinsaf: A Platform for Reporters and Influencers</h4>
                        <p>iinsaf is an innovative platform designed to bring reporters and influencers together, enabling them to collaborate and amplify their voices. The platform connects advertisers with a vast network of reporters and influencers across India, effectively bridging the gap between advertisers and those looking to showcase their products or services.</p>
                        <p>iinsaf aims to build a community-driven platform where reporters and influencers can thrive. We empower individuals to express their opinions and share valuable content while facilitating opportunities for advertisers to reach their target audience effectively.</p>

                        <h4 className="text-xl font-semibold mt-4">What We Offer</h4>
                        <p><strong>For Reporters:</strong></p>
                        <ul className="list-disc pl-5">
                            <li><strong>Join Our Federation:</strong> Reporters from all corners of India can join our federation and become part of a larger community.</li>
                            <li><strong>Platform for Sharing:</strong> Gain access to a dedicated platform for sharing news, stories, and opinions, reaching a wider audience.</li>
                            <li><strong>Collaborative Opportunities:</strong> Collaborate with other reporters to amplify your impact and contribute to a collective voice.</li>
                        </ul>

                        <p><strong>For Influencers:</strong></p>
                        <ul className="list-disc pl-5">
                            <li><strong>Diverse Network:</strong> Become part of a network of social media influencers with varied audiences, enhancing your reach.</li>
                            <li><strong>Brand Collaborations:</strong> Explore opportunities to collaborate with brands, promoting their products or services.</li>
                            <li><strong>Increased Engagement:</strong> Boost your reach and engagement through strategic partnerships and targeted campaigns.</li>
                        </ul>

                        <p><strong>For Advertisers:</strong></p>
                        <ul className="list-disc pl-5">
                            <li><strong>Targeted Showcasing:</strong> Showcase your ads to a targeted audience through our platform, ensuring your message reaches the right people.</li>
                            <li><strong>Diverse Pool Access:</strong> Access a diverse pool of reporters and influencers to create effective advertising campaigns.</li>
                            <li><strong>Maximized ROI:</strong> Maximize your return on investment by reaching potential customers through authentic endorsements and tailored advertising solutions.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-4">Benefits for Reporters and Influencers</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Increased Visibility and Recognition:</strong> Gain increased visibility and recognition within the iinsaf community.</li>
                            <li><strong>Broader Reach:</strong> Extend your reach beyond traditional platforms and gain a larger audience.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-4">Monetization Opportunities:</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Sponsored Content:</strong> Explore monetization opportunities through sponsored content and brand collaborations.</li>
                            <li><strong>Collaborative Projects:</strong> Engage in collaborative projects that provide financial benefits and professional growth.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-4">Supportive Network:</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Growth and Learning:</strong> Access a supportive network of like-minded individuals, fostering growth and learning.</li>
                            <li><strong>Resource Sharing:</strong> Benefit from resource sharing and collective knowledge within the community.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-4">Benefits for Advertisers</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Targeted Advertising:</strong></li>
                            <li><strong>Relevant Audiences:</strong> Reach relevant audiences across diverse platforms, ensuring your ads are seen by potential customers.</li>
                            <li><strong>Effective Campaigns:</strong> Create effective advertising campaigns with the help of trusted reporters and influencers.</li>
                        </ul>

                        <p>iinsaf is committed to fostering a vibrant community where reporters, influencers, and advertisers can thrive together. Join us to be part of a platform that values collaboration, authenticity, and growth.</p>

                        <p><strong>Authentic Endorsements:</strong></p>
                        <ul className="list-disc pl-5">
                            <li><strong>Trusted Voices:</strong> Leverage authentic endorsements from trusted reporters and influencers to enhance your brand’s credibility.</li>
                            <li><strong>Genuine Engagement:</strong> Engage potential customers with genuine and relatable content.</li>
                        </ul>

                        <p><strong>Cost-Effective Solutions:</strong></p>
                        <ul className="list-disc pl-5">
                            <li><strong>Measurable Results:</strong> Benefit from cost-effective advertising solutions that provide measurable results and improve your marketing strategy.</li>
                            <li><strong>ROI Maximization:</strong> Maximize your return on investment through well-planned and executed advertising campaigns.</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-4">Our Vision</h4>
                        <p>We aim to create a comprehensive advertisement platform for India that serves multiple purposes. This platform will not only promote job opportunities but also foster a robust social media community. It will be designed to ensure that every startup and project can effectively reach their target audience.</p>
                        <p>Additionally, we will provide a safe space for news reporters to carry out fearless reporting. To support them in their endeavors, we will offer legal and medical assistance. This platform will be a one-stop solution that combines professional opportunities, community engagement, and support services to empower individuals and businesses alike.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
