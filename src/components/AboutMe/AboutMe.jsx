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
					<div className={styles.description}>
						<p>
						I have interest in web development, software engineering, and cloud computing.<br></br>
						Ngl, I have way too many interests<em>—sigh.</em> <br></br>
						Sometimes I draw silly creatures.
					  </p>
					</div>

					<a href="https://id.linkedin.com/in/jesslyn-gowin-967415247" target="_blank" className={styles.connectBtn}>
						Let's connect!
					</a>
				</div>

				<img src={getImageUrl("profile/frontProfile.png")} className={`${styles.profileImg} rounded-circle`}/>

			</section>

			
			<Skills />
		</>
	);
};