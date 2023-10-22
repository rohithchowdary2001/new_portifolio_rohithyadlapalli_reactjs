import React from 'react';
import Educationalpage from './Educationalpagee.css';
import { useState } from 'react';


function Educationpage() {


    return (
        <div className='educationcontainer'>
            <div style={{fontSize:"xxx-large",marginBottom:"30px",color:"#d8ebff"}}>My Education</div>
            <div className='masters'>
                <div style={{fontSize:"40px",color:"brown"}}>Master's</div>
                <div style={{fontSize:"40px"}} className='collegename'>Concordia University-Chicago</div>
                <div style={{fontSize:"30px"}} className='collegename'>Computer Science</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained: <b style={{color:'white'}}>NA</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2024-Present</div>
                <div style={{fontSize:"20px"}} className='collegename'>About my college experience:</div>
                <div className='descriptioneducation'>
                    <li>I am a prospective student at this university.</li>
                    <li>The course fully focuses on web development with artificial intelligence.</li>
                    <li>I have gone through curricula that feature web technologies, which makes students features better.</li>
                    <li>I look forward to doing wonderful web development projects with my people, who are all with me on campus.</li>
                    <li>The communication with the university is such a great thing; they responded very nicely.</li>
                </div>
            </div>
            <div className='graduation'>
                <div style={{fontSize:"40px",color:"brown"}}>Graduation</div>
                <div style={{fontSize:"40px"}} className='collegename'>SASI Institute of Technology and Engineering</div>
                <div style={{fontSize:"30px"}} className='collegename'>Computer Science and Engineering</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained: <b style={{color:'white'}}>65.04%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2019-2022</div>
                <div style={{fontSize:"20px"}} className='collegename'>About my college experience:</div>
                <div className='descriptioneducation'>
                    <li>The first place where I have gone through the IT field.</li>
                    <li>Here in the college environment, students developed technical skills and developed ease in computer science.</li>
                    <li>I had a good time with professors and with friends who helped me on both the personal and career sides.</li>
                    <li>I learned skills such as HTML,CSS, ReactJS,Java,SQL, and JavaScript.</li>
                </div>
                <div style={{fontSize:"30px"}} className='collegename'>Projects:</div>
                <div style={{fontSize:"25px"}} className='collegename'>User Defined Named entity recognition using the NLP approach</div>
                <div className='descriptioneducation'>
                    <li>This project helps people who are interested in definite entities.</li>
                    <li>NLP, which stands for Named Entity Recognition, is used to convert human language to machine-understandable language.</li>
                    <li>This project achieved an accuracy of 94.8% when we compared this model with two other models, which are BERT and CNN.</li>
                </div>
                <div style={{fontSize:"25px"}} className='collegename'>Spam message detection using the Naive Bayes model</div>
                <div className='descriptioneducation'>
                    <li>This project helps people find the spam messages they received.</li>
                    <li>This method was developed using the machine learning Naive Bayes model.</li>
                    <li>This mostly detects spam messages regarding Pyament scams.</li>
                </div>
            </div>
            <div className='diploma'>
                <div style={{fontSize:"40px",color:"brown"}}>Diploma</div>
                <div style={{fontSize:"40px"}} className='collegename'>VKR and VNB Ploytechnic College</div>
                <div style={{fontSize:"30px"}} className='collegename'>Civil Engineering</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained: <b style={{color:'white'}}>79.04%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2016-2019</div>
                <div style={{fontSize:"20px"}} className='collegename'>About my college experience:</div>
                <div className='descriptioneducation'>
                    <li>The first place where I have made myself strong and started learning new things.</li>
                    <li>Within 3 years of time, I went through smooth and rough times, which taught me a lot of lessons and gave me the strength to overcome every situation.</li>
                    <li>Faculty coordination is an amazing part of the whole 3 years and has impacted and helped in every situation.</li>
                </div>
            </div>
            <div className='highschool'>
                <div style={{fontSize:"40px",color:"brown"}}>High School</div>
                <div style={{fontSize:"40px"}} className='collegename'>Sri Nidhi High School</div>
                <div style={{fontSize:"30px"}} className='collegename'>General Subjects</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained: <b style={{color:'white'}}>83%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2015-2016</div>
                <div style={{fontSize:"20px"}} className='collegename'>About high school experience:</div>
                <div className='descriptioneducation'>
                <li>Place where I learned behavior with friends and with teachers.</li>
                <li>I made friends who gave their full attention to my needs.</li>
                <li>I created a lot of moments that I can memorize all the time.</li>
                </div>
            </div>
        </div>
    )
}

export default Educationpage;