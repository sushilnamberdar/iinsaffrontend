import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../homepage/Whatsappbutton';

const RefundPolicy = () => {
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
                            <h1 className="text-4xl text-white font-bold">Refund Policy</h1>
                            <ul className="breadcrumb flex justify-center mt-4">
                                <li><Link to="/" className="text-blue-500">Home</Link></li>
                                <li className="mx-2">/</li>
                                <li><Link to="/refund-policy" className="text-blue-500">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-s6" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-s6__content">
                                <h1>Refund Policy</h1>
                                <p>Thank you for visiting our website. Please read this policy carefully. This is the Refund Policy of [Your Company Name].</p>
                                <p>We do not issue refunds for any products or services purchased through our website.</p>
                                <p>If you have any questions about our Refund Policy, please contact us:</p>
                                <ul>
                                    <li>By email: <a href="mailto:[email protected]">[email protected]</a></li>
                                    <li>By visiting this page on our website: <a href="http://www.iinsaf.com">www.iinsaf.com</a></li>
                                    <li>By phone number: +91 99923-96623</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RefundPolicy;
