import React from 'react';
import { Link } from 'react-router-dom';

import Homepagecardss from './Homepagecardss.css';


function Homepagecards() {
    return (
        <div className='cardscontainer'>
            <Link to="/education" style={{ textDecoration: "none" }}>
                <div className='box-mainn'>
                    <div className='sub-boxaa'></div>
                    <div className='sub-boxba'> My Education</div>
                </div>
            </Link>



            <Link to="/job-experience" style={{ textDecoration: "none" }}>
                <div className='box-mainn'>
                    <div className='sub-boxab'></div>
                    <div className='sub-boxbb'>My Job and Internships</div>
                </div>
            </Link>


            <Link to="/certification" style={{ textDecoration: "none" }}>
                <div className='box-mainn'>
                    <div className='sub-boxac'></div>
                    <div className='sub-boxbc'>
                        <div className='rohith'>My Certifications</div>
                    </div>
                </div>
            </Link>

            <Link to="/social-media" style={{ textDecoration: "none" }}>
                <div className='box-mainn'>
                    <div className='sub-boxad'></div>
                    <div className='sub-boxbd'>
                        <div className='rohith'>My Achievements</div>
                    </div>
                </div>
            </Link>
            <Link to="/skills" style={{ textDecoration: "none" }}>
                <div className='box-mainn'>
                    <div className='sub-boxae'></div>
                    <div className='sub-boxbe'>
                        <div className='rohith'>My Skill set</div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Homepagecards