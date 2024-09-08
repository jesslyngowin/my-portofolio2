import React from 'react';
import { getImageUrl } from '../../utils/utils';
import styles from './AboutMe.module.css';

import { Skills } from '../Skills/Skills';

export const AboutMe = () => {
	return (
		<>
			<section className={styles.container} id="aboutme">
				<div className={styles.content}>
					<h1 className={styles.title}>Hi, I'm Jesslyn.</h1>
					<p className={styles.description}>
						A front-end development enthusiast.<br></br>
						Currently learning about web development.
					</p>

					<a href="https://id.linkedin.com/in/jesslyn-gowin-967415247" className={styles.connectBtn}>
						Let's connect!
					</a>
				</div>

				<img src={getImageUrl("profile/frontProfile.png")} className={`${styles.profileImg} rounded`}/>

				<div className={styles.topBlur}/>
				{/* <div className={styles.bottomBlur}/> */}
			</section>

			
			<Skills />
		</>
	);
};