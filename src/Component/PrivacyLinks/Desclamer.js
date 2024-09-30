import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../homepage/Whatsappbutton';

const Disclaimer = () => {
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
                            <h1 className="text-4xl text-white font-bold">Disclaimer</h1>
                            <ul className="breadcrumb flex justify-center mt-4">
                                <li><Link to="/" className="text-blue-500">Home</Link></li>
                                <li className="mx-2">/</li>
                                <li><Link to="/disclaimer" className="text-blue-500">Disclaimer</Link></li>
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
                                <h1>Disclaimer</h1>

                                <p>The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

                                <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

                                <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>

                                <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>

                                <p>If you have any concerns about any content on the site, please contact us.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Disclaimer;
