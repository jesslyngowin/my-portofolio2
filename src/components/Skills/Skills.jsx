import React from 'react';

import skills from '../../data/skills.json';
import styles from './Skills.module.css';
import { getImageUrl } from '../../utils/utils';

export const Skills = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>What I Use</h1>
				<div className={`${styles.skillContainer} d-flex justify-content-between gap-5 flex-wrap`}>
					{skills.map((skill, id) => {
						return (
							<div key={id} className={styles.skillItems}>
								{/* <button type="button" className="btn btn-outline-light btn-lg">{skill.title}</button> */}
								<img src={getImageUrl(skill.logo)} className={`${styles.logo} float-start img-fluid`}/>
								<p>{skill.title}</p>
							</div>)
					})}

				</div>
			</div>
		</section>
	);
};