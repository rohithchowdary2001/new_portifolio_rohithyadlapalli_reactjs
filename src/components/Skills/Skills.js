// import React from 'react';
// import Skillss from './Skillss.css';
// import ProgressBar from "@ramonak/react-progress-bar";


// function Skills() {
//     return (
//         <div className='skills-container'>
//             <div style={{ fontSize: "xxx-large", marginBottom: "30px", color: "#d8ebff" }}>My skills</div>
//             <div className='card-items'>
//                 <div className='card-skill-container'>
//                 <div>React Js</div>
//                     <ProgressBar completed={75} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>HTML 5</div>
//                     <ProgressBar completed={80} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>CSS 3</div>
//                     <ProgressBar completed={80} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Java</div>
//                     <ProgressBar completed={60} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Spring Boot</div>
//                     <ProgressBar completed={40} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>SQL</div>
//                     <ProgressBar completed={75} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Docker</div>
//                     <ProgressBar completed={30} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Node Js</div>
//                     <ProgressBar completed={50} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Java Script</div>
//                     <ProgressBar completed={60} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//                 <div className='card-skill-container'>
//                 <div>Python</div>
//                     <ProgressBar completed={40} bgColor="green" animateOnRender={true} customLabel=" "/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills;






import React, { useState } from 'react';
import Skillss from './Skillss.css';
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const handleSkillHover = (skill) => {
        setHoveredSkill(skill);
    };

    const handleSkillLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <div className='skills-container'>
            <div style={{ fontSize: "xxx-large", marginBottom: "30px", color: "#d8ebff" }}>My skills</div>
            <div className='card-items'>
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className='card-skill-container'
                        onMouseEnter={() => handleSkillHover(skill)}
                        onMouseLeave={handleSkillLeave}
                    >
                        <div>{skill.name}</div>
                        <ProgressBar
                            completed={skill.percentage}
                            customLabel=' '
                            bgColor="green"
                            animateOnRender={true}
                        />
                        {hoveredSkill === skill && (
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(200%, -85%)', color: 'black',fontWeight:'500' }}>
                                {skill.percentage}%
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <ul style={{fontSize:"14px",paddingLeft:"0px",fontFamily:"emoji"}}>*Click on the skill to see percentage.</ul>
        </div>
    );
}

const skills = [
    { name: 'React Js', percentage: 75 },
    { name: 'HTML 5', percentage: 80 },
    { name: 'CSS 3', percentage: 80 },
    { name: 'Java', percentage: 60 },
    { name: 'Spring Boot', percentage: 40 },
    { name: 'SQL', percentage: 75 },
    { name: 'Docker', percentage: 30 },
    { name: 'Node Js', percentage: 50 },
    { name: 'Java Script', percentage: 60 },
    { name: 'Python', percentage: 40 },
];

export default Skills;
