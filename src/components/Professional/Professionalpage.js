import React from 'react';
import Professionalpagee from "./Professionalpagee.css";

function Professionalpage() {
  return (
    <div className='professional-container'>
      <div style={{fontSize:"xxx-large",marginBottom:"30px",color:"#d8ebff"}}>Job and Internship Experience's</div>
      <div className='job-atos'>
        <div style={{fontSize:"40px",color:"brown"}}>Atos Pvt. Ltd.</div>
        <div style={{fontSize:"20px"}} className='collegename'>Designation: Associate Consultent</div>
        <div style={{fontSize:"20px"}} className='collegename'>Years of Experience: 10 Months</div>
        <div style={{fontSize:"20px"}} className='collegename'>Role: Web Developer</div>
        <div style={{fontSize:"20px"}} className='collegename'>Job type: full-time</div>
        <div style={{fontSize:"20px"}} className='collegename'>Job Description:</div>
        <div className='descriptioneducation'>
          <li>I worked as a web developer for Manulife Insurance Company using ReactJS.</li>
          <li>Developed a knowledge management portal for naive employees in the organization, which is a quiz.</li>
          <li>I worked with clients who are located in Canada and gained information regarding how business works and what we have to follow during deployment.</li>
          <li>I worked with a team of 10 members and gained in-depth knowledge of React and a few backend tools such as Spring Boot, SQL, and Docker.</li>
        </div>
      </div>
      <div className='job-atos'>
        <div style={{fontSize:"40px",color:"brown"}}>Dhalapathi Constructions</div>
        <div style={{fontSize:"20px"}} className='collegename'>Designation: Jr. Site Engineer</div>
        <div style={{fontSize:"20px"}} className='collegename'>Years of Experience: 6 Months</div>
        <div style={{fontSize:"20px"}} className='collegename'>Role: Site Inspector</div>
        <div style={{fontSize:"20px"}} className='collegename'>Job type: Intern</div>
        <div style={{fontSize:"20px"}} className='collegename'>Job Description:</div>
        <div className='descriptioneducation'>
          <li>Interned in Dhalapathi Construction as a site engineer for residential building development.</li>
          <li>Work with technical instruments such as dumpy level and auto level, which are used for leveling the ground surface.</li>
          <li>Gained knowledge on site development and building design.</li>
          <li>This internship created a lot of impact and confidence for me in civil engineering and building construction.</li>
        </div>
      </div>
    </div>
  )
}

export default Professionalpage