import React from 'react';
import Socialmediaa from './Socialmediaa.css';

function Socialmedia() {
  return (
    <div className='social-container'>
      <div className='social-name' style={{ fontSize: "xxx-large", marginBottom: "30px", color: "#d8ebff" }}>My Achievements</div>
      <div className='masterss'>
        <div style={{ fontSize: "40px", color: "brown" }}>Carrier Achievements</div>
        <div className='descriptioneducation'>
          <li>Placed in the top 3 MNC companies, such as
            <div style={{ marginLeft: "30px" }}>
              <li>Capgemini</li>
              <li>Atos Syntel</li>
              <li>Infosys</li>
            </div>
          </li>
          <li>First place in the Idea Bucket competition at ANVESHANA 2K22, hosted by SASI INSTITUTE OF TECHNOLOGY AND ENGINEERING.</li>
          <li>Completed bachelors with first class in limited time.</li>
        </div>
      </div>
      <div className='mastersss'>
      <div style={{ fontSize: "40px", color: "brown" }}>Professional Achievements</div>
      <div className='descriptioneducation'>
        <li>Appreciation from the manager for fast work progress.</li>
        <li>I got a scholarship to a bachelor's college for merit percentages gained in previous studies.</li>
        <li>successfully completed Project Sprint before the given time.</li>
      </div>
      </div>
    </div>
  )
}

export default Socialmedia;