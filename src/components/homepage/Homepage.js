import Homepagee from './Homepagee.css';
import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { TypeAnimation } from 'react-type-animation';
import Homepagecards from './Homepagecards';
function Homepage() {
    return (
            <div className='homepagecontainer'>
                <div className='upperhomepage'>
                    <div className='welcomeblock'>
                        Welcome to <span>ROHITH's</span> Portfolio ....
                    </div>
                    <div className='backgroundimage'></div>
                    <div className='description'>
                        <TypeAnimation
                            sequence={[
                                `#Hi everyone here you can see my\n#Educational background and\n# My Professional background...`,
                                100,
                                "",
                            ]}
                            speed={10}
                            style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className='home-line'></div>
                <div className='lowerhomepage'>
                    <div className='headinglower'>Check about me here</div>
                    <Homepagecards />
                </div>
            </div>
    )
}

export default Homepage