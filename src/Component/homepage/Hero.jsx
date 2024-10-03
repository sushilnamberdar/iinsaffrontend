// Hero.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Hero.css';
import './css/style.css';
import './css/all.min.css';
import './css/bootstrap.min.css';
import './css/slick.css';
import HeroComponent1 from './HeroComponent1';
import HowweWork from './HowweWork';
import Bannersection3 from './Bannersection3';
import NewseReporter from './NewseReporter';
import Advertiserment from './Advertiserment';
import Videoshowing from './Videoshowing';
import WhatsAppButton from './Whatsappbutton';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    // Initialize AOS on component mount
    const navigate  = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true,     // Whether animation should happen only once
        });
    }, []);


      

    return (
        <div className='hero-main min-h-screen'>
            {/* section 1 */}
            <div data-aos="fade-up">
                <HeroComponent1 />
            </div>

            {/* added section 7 video section  */}
            <div data-aos="flip-right">
                <Videoshowing />
            </div>

            {/* section 2 how we work */}
            <div data-aos="fade-right">
                <HowweWork />
            </div>

            {/* section 3 banner */}
            <div data-aos="fade-left">
                <Bannersection3 />
            </div>

            {/* section 4 for news reporter */}
            <div data-aos="zoom-in">
                <NewseReporter />
            </div>

            {/* section 5 for advertisement */}
            <div data-aos="flip-up">
                <Advertiserment />
            </div>

            {/* section 6 WhatsApp button */}
            <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
                <WhatsAppButton />
            </div>
        </div>
    );
}

export default Hero;
