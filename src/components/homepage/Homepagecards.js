import React from 'react';
import { Link } from 'react-router-dom';

import Homepagecardss from './Homepagecardss.css';
import educationimage from './educationimage.jpg';
import professionalimage from './professionalimage.jpeg';
import socialmdeiaimage from './socialmediaimage.jpg';

function Homepagecards() {
    return (
        <div className='cardscontainer'>
  <Link to="/education"> {/* Add this Link */}
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front" >
              <img className='flipcard1' src={educationimage} alt="logo" />
            </div>
            <div class="flip-card-back">
              <h3>Click here to know my EDUCATIONAL background</h3>
            </div>
          </div>
        </div>
      </Link>


            <div class="flip-card" tabIndex="0">
                <div class="flip-card-inner">
                    <div class="flip-card-front" >
                        <img className='flipcard1' src={professionalimage} alt="logo" />
                    </div>
                    <div class="flip-card-back">
                        <h3>Click here to know my Professional background</h3>
                    </div>
                </div>
            </div>

            <div class="flip-card" tabIndex="0">
                <div class="flip-card-inner">
                    <div class="flip-card-front" >
                        <img className='flipcard1' src={socialmdeiaimage} alt="logo" />
                    </div>
                    <div class="flip-card-back">
                        <h3>Click here to Connect with me</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepagecards