import React from 'react';

import styles from './Projects.module.css';
import { getImageUrl } from '../../utils/utils';
import projects from '../../data/projects.json';

export const Projects = () => {
	return (

		<section className={styles.container} id="projects">
			<div className={styles.content}>
				<h1 className={styles.title}>Projects</h1>
					<div className={`${styles.projectsContainer} d-flex justify-content-between gap-5 flex-wrap`}>

						{projects.map((project, id) => {
							return (
								<div key={id} className={`${styles.projectsItem} card`}>
									<img src={getImageUrl(project.imageSrc)} className={`${styles.projectImg} card-img-top`} />
									<div className={`${styles.projectDetail} card-body`}>
										<h4 className="card-title">{project.title}</h4>
										<p className="card-text">{project.role}</p>
										<a href={project.link} target="_blank" className={`${styles.viewBtn} btn btn-primary`}>View more</a>
									</div>
								</div>)
						})}

					</div>
			</div>
			
		</section>

	);
};
