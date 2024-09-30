import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../homepage/Whatsappbutton';

const TreamsAndCondition = () => {
    return (
        <div>

            <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
                <WhatsAppButton />
            </div>
            {/* Page Banner Section */}
            <section className="bg-blue-700 banner-img" style={{ marginTop: '0px' }}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="content text-center py-16">
                            <h1 className="text-4xl text-white font-bold">Terms and Conditions
                            </h1>
                            <ul className="breadcrumb flex justify-center mt-4">
                                <li><Link to="/" className="text-blue-500">Home</Link></li>
                                <li className="mx-2">/</li>
                                <li><a href="#" className="text-blue-500">Terms and Conditions</a></li>
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
                                <p>
                                    These terms and conditions govern your use of the website and services provided by www.iinsaf.com (hereinafter referred to as "the Website"). By accessing or using the Website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, you may not use the Website.
                                </p>

                                <h2>1. Definitions</h2>
                                <ul>
                                    <li><strong>Influencer:</strong> Refers to individuals who have a social media presence on platforms such as Facebook, Twitter, Instagram, or YouTube and have registered with the Website to collaborate with advertisers.</li>
                                    <li><strong>Advertiser:</strong> Refers to individuals or entities who have registered with the Website to post requirements for promotional activities and collaborate with influencers.</li>
                                    <li><strong>Views:</strong> Refers to the number of impressions, engagements, or interactions generated by the influencer's promotional activities as per the advertiser's requirements.</li>
                                    <li><strong>Commission:</strong> Refers to the fee charged by the Website for facilitating the collaboration between influencers and advertisers.</li>
                                </ul>

                                <h2>2. Registration</h2>
                                <ul>
                                    <li>To access the services provided by the Website, influencers and advertisers must register with valid credentials.</li>
                                    <li>Influencers must provide their social media URLs and select their city during registration.</li>
                                    <li>Advertisers must provide accurate information about their requirements and selected locations during registration.</li>
                                    <li>The Website reserves the right to reject any registration at its discretion.</li>
                                </ul>

                                <h2>3. Collaboration Process</h2>
                                <ul>
                                    <li>Once registered, advertisers can post their requirements specifying the selected location and desired promotional activities.</li>
                                    <li>Influencers have the option to accept or reject posted requirements based on their preferences and availability.</li>
                                    <li>Upon acceptance, influencers must fulfill the requirements within the stipulated time frame and generate the required views.</li>
                                    <li>Advertisers will compensate influencers based on the agreed-upon commission structure.</li>
                                </ul>

                                <h2>4. Payments and Commissions</h2>
                                <ul>
                                    <li>The Website will facilitate payments from advertisers to influencers based on the views generated.</li>
                                    <li>A portion of the commission will be retained by the Website as service charges, and the remaining amount will be disbursed to the influencers.</li>
                                    <li>The commission structure will be transparent and communicated to both influencers and advertisers prior to collaboration.</li>
                                </ul>

                                <h2>5. Content Guidelines</h2>
                                <ul>
                                    <li>Influencers must adhere to the content guidelines provided by the Website and the advertiser while creating promotional content.</li>
                                    <li>Content promoting illegal activities, hate speech, violence, or adult content is strictly prohibited.</li>
                                    <li>The Website reserves the right to remove any content that violates these guidelines without prior notice.</li>
                                </ul>

                                <h2>6. Intellectual Property</h2>
                                <ul>
                                    <li>All intellectual property rights related to the content created by influencers during collaborations shall belong to the respective influencers.</li>
                                    <li>Advertisers shall have the right to use the content created by influencers for promotional purposes as agreed upon during collaboration.</li>
                                </ul>

                                <h2>7. Liability</h2>
                                <ul>
                                    <li>The Website acts as a facilitator for collaboration between influencers and advertisers and shall not be held liable for any disputes arising between the parties.</li>
                                    <li>Users agree to indemnify and hold the Website harmless from any claims, damages, or losses resulting from their use of the services.</li>
                                </ul>

                                <h2>8. Termination</h2>
                                <ul>
                                    <li>The Website reserves the right to terminate or suspend the accounts of users found to be violating these terms and conditions.</li>
                                    <li>Users may terminate their accounts at any time by providing written notice to the Website.</li>
                                </ul>

                                <h2>9. Modification of Terms</h2>
                                <ul>
                                    <li>The Website reserves the right to modify these terms and conditions at any time without prior notice.</li>
                                    <li>Users are encouraged to review the terms and conditions periodically to stay updated on any changes.</li>
                                </ul>

                                <h2>10. Governing Law</h2>
                                <ul>
                                    <li>These terms and conditions shall be governed by and construed in accordance with the laws of Hisar Jurisdiction.</li>
                                    <li>Any disputes arising out of or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Hisar Jurisdiction.</li>
                                </ul>

                                <p>
                                    By using the Website, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns regarding these terms and conditions, please contact us at
                                    <a href="mailto:protected@example.com"> [email protected]</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TreamsAndCondition;
