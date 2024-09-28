import React, { useEffect } from 'react';
import './Carousel2.css';
import Aos from 'aos';
import {ReactTyped} from 'react-typed';

const Carousel2 = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])
    
    return (
        <div className='main-container' data-aos="zoom-in">
        <div className="col-lg-6" style={{marginTop:"0px"}}>
            <div id="slideshow" className="position-relative">
                <div className="about_ellipse"></div>
                <div className="entire-content">
                    <div className="content-carrousel">
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="boat" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="watch" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="car" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="boat" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="watch" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="car" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="boat" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="watch" />
                        </figure>
                        <figure className="shadow img_border">
                            <img className="width_sm_100" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="car" />
                        </figure>
                    </div>
                </div>
            </div>
            {/* <img src="https://iinsaf.com/images/iinsaf-home.jpeg" alt="" /> */}
        </div>

        <div className='section-2' data-aos="" data-aos-mirror="">
      <h2 style={{color: "blue", fontWeight: "900", background: "wheat"}}>
        <ReactTyped
        strings={["A federation of Social Media Reporters and Advertisers"]}
        typeSpeed={30}
        loop={false}
        showCursor={false}
        />
        
      </h2>
      <br />
      <h1 style={{fontWeight: "bolder"}}>
      <ReactTyped
          strings={[
            "Welcome To"
          ]}
          typeSpeed={120}
          backSpeed={80}
          showCursor={false}
        /> <span style={{color: "red"}}>II</span>nsaf
        
      </h1>
      <h4>
        <ReactTyped
          strings={[
            "Social media reporters and advertisers crafting compelling narratives...",
            "Engage and influence audiences with powerful stories."
          ]}
          typeSpeed={85}
          backSpeed={30}
          loop={true}
          showCursor={false}
        />
      </h4>
    </div>
        </div>
    );
}

export default Carousel2;
