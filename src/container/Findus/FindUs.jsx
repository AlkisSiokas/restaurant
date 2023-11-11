import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <div className='app__findus-title'>
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '5rem' }}>Find Us</h1>
      </div>
      <div>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginBottom: '1rem'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1.5rem 0' }}>Opening Hours</p>
          <div>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__opensans" style={{marginTop: "1rem"}}>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
        </div>
      </div>
      <button type="button" className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_image" />
    </div>
  </div>
);

export default FindUs;