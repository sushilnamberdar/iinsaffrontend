import React from 'react';
import WhatsAppButton from '../homepage/Whatsappbutton';
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({ websiteUrl }) => {
    return (
        <>
            <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
                <WhatsAppButton />
            </div>
            {/* Page Banner Section */}
            <section className="bg-blue-700 banner-img" style={{ marginTop: '0px' }}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="content text-center py-16">
                            <h1 className="text-4xl text-white font-bold">Privacy Policy
                            </h1>
                            <ul className="breadcrumb flex justify-center mt-4">
                                <li><Link to="/" className="text-blue-500">Home</Link></li>
                                <li className="mx-2">/</li>
                                <li><a href="#" className="text-blue-500">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <article>
                <section className="about-s6" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-s6__content">
                                    <p>
                                        Welcome to our Privacy Policy. Your privacy is important to us. This policy explains how we collect,
                                        use, disclose, and safeguard your information when you visit our website{' '}
                                        <a href={websiteUrl}>{websiteUrl}</a>, including any other media form, media channel, mobile
                                        website, or mobile application related or connected thereto (collectively, the "Site"). Please read
                                        this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do
                                        not access the site.
                                    </p>

                                    <h2>Collection of Your Information</h2>
                                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

                                    <h3>Personal Data</h3>
                                    <p>
                                        Personally identifiable information, such as your name, address, email address, and telephone number,
                                        that you voluntarily give to us when you register on the Site or when you choose to participate in
                                        various activities related to the Site, such as online chat and message boards. You are under no
                                        obligation to provide us with personal information of any kind; however, your refusal to do so may
                                        prevent you from using certain features of the Site.
                                    </p>

                                    <h3>Derivative Data</h3>
                                    <p>
                                        Information our servers automatically collect when you access the Site, such as your IP address,
                                        your browser type, your operating system, your access times, and the pages you have viewed directly
                                        before and after accessing the Site.
                                    </p>

                                    <h3>Financial Data</h3>
                                    <p>
                                        Financial information, such as data related to your payment method (e.g., valid credit card number,
                                        card brand, expiration date) that we may collect when you purchase, order, return, exchange, or
                                        request information about our services from the Site. We store only very limited, if any, financial
                                        information that we collect. Otherwise, all financial information is stored by our payment processor.
                                    </p>

                                    <h3>Social Media Information</h3>
                                    <p>
                                        We may provide you with the option to register with us using your existing social media account
                                        details, like your Facebook, Twitter, Instagram, or YouTube account. If you choose to register in
                                        this way, we will collect the information described in the section called "How We Use Your
                                        Information."
                                    </p>

                                    <h3>Advertiser Information</h3>
                                    <p>
                                        If you register as an advertiser, we may collect information about your company, including its name,
                                        location, contact information, and payment details.
                                    </p>

                                    <h2>Use of Your Information</h2>
                                    <p>We use the information we collect or receive:</p>
                                    <ul>
                                        <li>To facilitate account creation and logon process.</li>
                                        <li>To send you marketing and promotional communications.</li>
                                        <li>To respond to inquiries and offer support.</li>
                                        <li>To request feedback and contact you about your use of the Site.</li>
                                        <li>To enable user-to-user communications.</li>
                                        <li>To enforce terms and conditions and policies governing the Site.</li>
                                    </ul>

                                    <h2>Disclosure of Your Information</h2>
                                    <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                                    <ul>
                                        <li>By Law or to Protect Rights.</li>
                                        <li>Third-Party Service Providers.</li>
                                        <li>Marketing Communications.</li>
                                    </ul>

                                    <h2>Retention of Your Information</h2>
                                    <p>We will retain your personal information only for as long as is necessary for the purposes set out in this privacy policy.</p>

                                    <h2>Security of Your Information</h2>
                                    <p>We use administrative, technical, and physical security measures to help protect your personal information.</p>

                                    <h2>Changes to This Privacy Policy</h2>
                                    <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible.</p>

                                    <h2>Contact Us</h2>
                                    <p>If you have questions or comments about this privacy policy, please contact us.</p>

                                    <h2>Conclusion</h2>
                                    <p>Thank you for reading our Privacy Policy. We hope you understand how we use your information and feel confident in our commitment to your privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
};

export default PrivacyPolicy;
