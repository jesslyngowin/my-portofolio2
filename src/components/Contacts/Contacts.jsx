import React from 'react';
import styles from './Contacts.module.css';

// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contacts = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className="d-flex flex-column align-items-start">
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.description}>You can find me on</p>

        <div>
          <ul className={`${styles.links} d-flex justify-content-start gap-4 list-unstyled`}>
            <li className={`${styles.link} mx-3`}>
              <a href="mailto:jesslyngwn@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="3x" /> 
              </a>
            </li>
            <li className={`${styles.link} mx-3`}>
              <a href="https://id.linkedin.com/in/jesslyn-gowin-967415247">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </li>
            <li className={`${styles.link} mx-3`}>
              <a href="https://www.github.com/jesslyngowin">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </li>
          </ul>
        </div>
      </div>

			<div className={styles.bottomBlur}/>
    </footer>
  );
};
