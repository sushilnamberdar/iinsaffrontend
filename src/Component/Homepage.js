import React from 'react';

const MyFormComponent = () => {
    return (
        <form method="post" action="./" id="form1" className="relative bg-[#ECF5FF] max-w-[1100px] w-full">
            <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="XIWRP+Xi9mcJwuTqitKieCSJfmazp7QNm7JKOQmWxeWRWDm1wf2mNmzX66PZ6as6pPIg/K+89EJsRyEQ9rpzhlqcrJB3c/ijQTEK2X6TOCI7e5UAyabIy6mqNl+21e4kAqB0tt9UKcIb8SrG21JvJn7aT8dP9IwI8tozMv6zKgUKfOwEAnCduQc9hRJZvJZUEssQiZgbaoJo5S7vYQh2sBykvV+EhwlCWQDV3a3/OPuUn1s/etFnJshwmIXAyyp6" />
            </div>
            <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="90059987" />
            </div>
            <div className="bg-[#35b647] border-2 border-[#35b647] rounded-full shadow-[0_8px_10px_#35b647] cursor-pointer h-[68px] w-[68px] fixed left-[8%] bottom-[5%] z-50 transition-all duration-300 animate-[email-an_linear_1s_infinite]">
                <a href="https://api.whatsapp.com/send?phone=919992396623&amp;text=Hi" className="flex items-center justify-center h-full">
                    <i className="fa-brands fa-whatsapp text-white text-[29px] transition-all duration-300 leading-[66px]"></i>
                    <div className="relative h-full w-full rounded-full overflow-hidden">
                        <span className="absolute right-4 top-[22px] text-center text-[#F95C18] opacity-0 text-0 leading-[14px] font-semibold uppercase transition-opacity duration-300 font-montserrat">WhatsApp</span>
                    </div>
                </a>
            </div>

            <header className="header-s3">
                <div className="header-container">
                    <div className="header-top-container">
                        <div className="container">
                            <div className="header-s3__top flex justify-between p-4">
                                <div className="p-left flex space-x-4">
                                    <div className="tb-single-info-s2 flex items-center">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <p><a href="tel:09992396623">+91 99923-96623</a></p>
                                        </div>
                                    </div>
                                    <div className="tb-single-info-s2 flex items-center">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <p>
                                                <a href="/cdn-cgi/l/email-protection#a6cfcfc8d5c7c0c1d4c9d3d6e6c1cbc7cfca88c5c9cb">
                                                    <span className="__cf_email__" data-cfemail="472e2e29342621203528323707202a262e2b6924282a">[email protected]</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-right">
                                    <ul className="social-icons-s1 flex space-x-4">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom-container">
                        <div className="container">
                            <div className="header-s3__bottom flex justify-between p-4">
                                <div className="p-left">
                                    <div className="logo">
                                        <a href="index.aspx">
                                            <img src="images/iinsaf.png" style={{ width: '190px' }} alt="iinsaf logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-center">
                                    <nav className="m-nav">
                                        <ul className="flex space-x-4">
                                            <li><a href="index.aspx">Home</a></li>
                                            <li><a href="about.aspx">About</a></li>
                                            <li><a href="faqs.aspx">Faqs</a></li>
                                            <li><a href="contact.aspx">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="p-right flex space-x-4">
                                    <a id="join_as_social_hl" className="btn btn-s3" href="https://www.iinsaf.com/social/">Reporters</a>
                                    <a id="join_as_advertiser_hl" className="btn btn-s3 bg-black" href="https://www.iinsaf.com/advertiser/">Advertisers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="mobile-header">
                <div className="container">
                    <div className="mobile-header__container flex justify-between p-4">
                        <div className="p-left">
                            <div className="logo">
                                <a href="#">
                                    <img src="images/iinsaf.png" style={{ width: '190px' }} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="p-right">
                            <span id="nav-opn-btn" className="cursor-pointer">
                                <i className="fa-solid fa-bars" style={{ marginLeft: '10px', marginTop: '10px' }}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <aside id="offcanvas-nav" className="bg-white">
                <nav className="m-nav">
                    <span id="nav-cls-btn" className="cursor-pointer"><i className="fa-solid fa-xmark"></i></span>
                    <div className="logo">
                        <a href="index.aspx">
                            <img src="images/iinsaf.png" style={{ width: '190px' }} alt="" />
                        </a>
                    </div>
                    <ul className="nav-links">
                        <li><a href="index.aspx">Home</a></li>
                        <li><a href="about.aspx">About</a></li>
                        <li><a href="faqs.aspx">Faqs</a></li>
                        <li><a href="contact.aspx">Contact</a></li>
                    </ul>
                    <a id="join_as_social_hl" className="btn btn-s3" href="https://www.iinsaf.com/social/">Reporters</a>
                    <a id="join_as_advertiser_hl" className="btn btn-s3 bg-black" href="https://www.iinsaf.com/advertiser/">Advertisers</a>
                </nav>
            </aside>

            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="text-3xl font-bold">Welcome to IINSAF</h1>
                        <p className="text-lg">Join our community of reporters and advertisers.</p>
                    </div>
                </div>
            </section>

            <section className="appointments">
                <h2 className="text-2xl font-semibold">Appointments</h2>
                <ul id="appointmentsList"></ul>
            </section>
        </form>
    );
};

export default MyFormComponent;
