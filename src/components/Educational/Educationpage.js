import React from 'react';
import Educationalpage from './Educationalpagee.css';
import { useState } from 'react';


function Educationpage() {


    return (
        <div className='educationcontainer'>
            <div className='masters'>
                <div style={{fontSize:"70px",color:"brown"}}>Master's</div>
                <div style={{fontSize:"40px"}} className='collegename'>Concordia University-Chicago</div>
                <div style={{fontSize:"30px"}} className='collegename'>Computer Science</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained : <b style={{color:'white'}}>NA</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2024-Present</div>
                <div style={{fontSize:"20px"}} className='collegename'>About college experience:</div>
                <div className='descriptioneducation'>
                    <li>I am a propspective student to this University.</li>
                    <li>Where course fully focus on web development with Artificial intelligence.</li>
                    <li>I have gone through curriculam which is having a featured web technologies which makes students feature better.</li>
                    <li>Looking forward to do a wonderfull web development projects with my people who are all with me in the campus.</li>
                    <li>The communication with the University is such a great thing where they responded very nicely.</li>
                </div>
            </div>
            <div className='graduation'>
                <div style={{fontSize:"70px",color:"brown"}}>Graduation</div>
                <div style={{fontSize:"40px"}} className='collegename'>SASI Institute of Technology and Engineering</div>
                <div style={{fontSize:"30px"}} className='collegename'>Computer Science and Engineering</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained : <b style={{color:'white'}}>65.04%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2019-2022</div>
                <div style={{fontSize:"20px"}} className='collegename'>About college experience:</div>
                <div className='descriptioneducation'>
                    <li>The first place where i have gone through IT field.</li>
                    <li>Here in the college environment developed technical skills and developed ease on computer science.</li>
                    <li>Had a good time with professors and with friends by helping me in both personal and carrier side.</li>
                    <li>Learned skills such as HTML,CSS,React Js,Java,SQL,C,Java Script.</li>
                </div>
                <div style={{fontSize:"30px"}} className='collegename'>Projects:</div>
                <div style={{fontSize:"25px"}} className='collegename'>User Defined Named Entity Recognition using NLP Approach</div>
                <div className='descriptioneducation'>
                    <li>This project helps for the people who are intrested in definite entitys.</li>
                    <li>NLP which stands for Named Entity Recognition which is used to convert human language to machine understandable language.</li>
                    <li>This project achieved an accuracy of 94.8% where we comparred this model with 2 other models which are BERT and CNN.</li>
                </div>
                <div style={{fontSize:"25px"}} className='collegename'>Spam message detection using Naive Bayes model</div>
                <div className='descriptioneducation'>
                    <li>This projects helps people to find the spam messages which they recieved.</li>
                    <li>This method was developed on Machine Learning Naive Bayes model.</li>
                    <li>This mostly detects the spam messages regarding Pyament scams.</li>
                </div>
            </div>
            <div className='diploma'>
                <div style={{fontSize:"70px",color:"brown"}}>Diploma</div>
                <div style={{fontSize:"40px"}} className='collegename'>VKR & VNB Ploytechnic College</div>
                <div style={{fontSize:"30px"}} className='collegename'>Civil Engineering</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained : <b style={{color:'white'}}>79.04%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2016-2019</div>
                <div style={{fontSize:"20px"}} className='collegename'>About college experience:</div>
                <div className='descriptioneducation'>
                    <li>The first place where i have made my self strong and strted learning new things.</li>
                    <li>Within 3years of time gone through smooth and rough times which teaches me a lot leasons and gave me a strength to over come every situation.</li>
                    <li>Faculty Co-ordination is a amazing part in the whole 3 years intract as much as and helps every situation.</li>
                </div>
            </div>
            <div className='highschool'>
                <div style={{fontSize:"70px",color:"brown"}}>High School</div>
                <div style={{fontSize:"40px"}} className='collegename'>Sri Nidhi High School</div>
                <div style={{fontSize:"30px"}} className='collegename'>General Subjects</div>
                <div style={{fontSize:"20px"}} className='collegename'>Percentage Obtained : <b style={{color:'white'}}>83%</b></div>
                <div style={{fontSize:"20px"}} className='collegename'>2015-2016</div>
                <div style={{fontSize:"20px"}} className='collegename'>About High School experience:</div>
                <div className='descriptioneducation'>
                <li>Place where Learned behaviour with friends and with teachers.</li>
                <li>where made friends who gave their full to my need.</li>
                <li>Created a lot moments which can memorize all the time.</li>
                </div>
            </div>
        </div>
    )
}

export default Educationpage;