import React from 'react';

import skills from '../../data/skills.json';
import styles from './Skills.module.css';

export const Skills = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Skills</h1>
				<div className={`${styles.skillContainer} d-flex justify-content-between gap-5 flex-wrap`}>
					{skills.map((skill, id) => {
						return (
							<div key={id} className={styles.skillItems}>
								{/* <button type="button" className="btn btn-outline-light btn-lg">{skill.title}</button> */}
								<p>{skill.title}</p>
							</div>)
					})}

				</div>
			</div>
		</section>
	);
};