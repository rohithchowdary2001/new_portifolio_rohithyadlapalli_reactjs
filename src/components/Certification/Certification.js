import React from 'react';
import Certificationn from './Certificationn.css';

function Certification() {
  return (
    <div className='certification-container'>
      <div style={{ fontSize: "xxx-large", marginBottom: "30px", color: "#d8ebff" }}>My certification's</div>
      <div>
       <li> <a className='certifications-name'>Microsoft Certified: Azure Fundamentals AZ 900 </a>
        <a href="https://www.credly.com/badges/f7324130-9c31-444d-9db1-f06e72977001/linked_in_profile">Check here</a></li>
      </div>

      <div>
       <li> <a className='certifications-name'>SQL (Basic) Hackerrank </a>
        <a href="https://www.hackerrank.com/certificates/51342f535f8e">Check here</a></li>
      </div>

      <div>
      <li> <a className='certifications-name'>SQL (Intermediate) Hackerrank </a>
        <a href="https://www.hackerrank.com/certificates/8246eb28ae06">Check here</a></li>
      </div>

      <div>
      <li> <a className='certifications-name'>Speexx English CEFR Level B2.1Speexx English CEFR Level B2.1 </a>
        <a href="https://portal.speexx.com/certificate/NjM5NTMyNjo6ODE=">Check here</a></li>
      </div>

      <div>
      <li> <a className='certifications-name'>Automated Software Testing-Skillsoft </a>
        <a href="https://skillsoft.digitalbadges-eu.skillsoft.com/7561d377-7fbd-43a2-84c5-bfefeaf296ec">Check here</a></li>
      </div>

      <div>
      <li> <a className='certifications-name'>Expert Insights on Essential Customer Service Skills-Skillsoft </a>
        <a href="https://skillsoft.digitalbadges-eu.skillsoft.com/934697af-cc17-4cf7-a111-ea2f2a7ca691">Check here</a></li>
      </div>

      <div>
      <li> <a className='certifications-name'>Google Cloud Architect: Cloud Design-Skillsoft </a>
        <a href="https://skillsoft.digitalbadges-eu.skillsoft.com/d38a93ad-9eb9-4e22-abce-1867707d3e9f">Check here</a></li>
      </div>

    </div>
  )
}

export default Certification;