import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faXTwitter, } from '@fortawesome/free-brands-svg-icons';
import './Footerr.css';
function Footer() {
    const emailAddress = 'rohithyadlapalli2001@gmail.com';
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-name'>Connect with me
                </div>
                <div className='footer-line'></div>
                <div className='footer-icons'>
                    <a href='https://www.facebook.com/yadlapalli.rohithchowdary/'>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: 'black', margin: '0px 20px 0px 20px' }} />
                    </a>
                    <a href='https://www.instagram.com/_rohith__chowdary_/?next=%2F'>
                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'black', margin: '0px 20px 0px 20px' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/rohith-yadlapalli-b783751a5/'>
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', margin: '0px 20px 0px 20px' }} />
                    </a>
                    <a href='https://github.com/rohithchowdary2001'>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black', margin: '0px 20px 0px 20px' }} />
                    </a>
                    <a href='https://twitter.com/kakaragai'>
                        <FontAwesomeIcon icon={faXTwitter} style={{ color: 'black', margin: '0px 20px 0px 20px' }} />
                    </a>
                </div>
                <div className='footer-line'></div>
                <a className='mailid-tag' href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Email@
                    {emailAddress}
                </a>
            </div>
        </div>
    );
}

export default Footer;

