import React from 'react';
import aboutImg from '../../images/about-img.jpg';
import './About.css';

const About = () => {
	return (
		<section className='about'>
			<div className='container'>
				<div className='section-title'>
					<h2>About</h2>
				</div>

				<div className='about-content grid'>
					<div className='about-img'>
						<img src={aboutImg} alt='' />
					</div>
					<div className='about-text'>
						<h2 className='about-title fs-26 ls-1'>About SDI GURUKULAM</h2>
						<p className='fs-17'>
						Since 2000, I’ve been working as a certified Coaching Professional who specializes in helping people cope with their issues. I coach my clients in a way that utilizes both their heads and their hearts. I first learned about coaching when I hit a roadblock in my own life and was struggling to move past it. The techniques I developed were so successful that friends and family began asking me for help with their own challenges. This motivated me to turn my newfound passion into a full-time career. If you have any questions about my methods, or would like to schedule a consultation, please get in touch today.
						</p>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
