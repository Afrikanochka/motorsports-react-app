import React from 'react';
import '../../../styles/components/hero.scss';
import '../../../styles/base/container.scss';

const Hero = () => {
    return (
        <div className="hero">
          <div className="container">
          <h1 className="heroTitle">The right way to get a car</h1>
            <div className="heroContainer">
            <p className="heroDesc">
            Monza Motorsports is a boutique-style dealership specializing in premium imports. We offer an advanced online vehicle purchasing experience with integrated financing and contactless home delivery.
            </p>
            <p className="heroDesc">
            All of our cars come with a 5 day/500 kilometres no-hassle exchange option. Since 2012 Monza Motorsports 
has been the benchmark for innovation in the automotive industry.
            </p>
            </div>
            <button className="heroBtn" type="button">
                Browse cars
            </button>
          </div>
        </div>
    );
}

export default Hero;