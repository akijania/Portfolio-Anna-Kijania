import {
  faBootstrap,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import PageNotFound from '../PageNotFound/PageNotFound';

import styles from './About.module.scss';

const About = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className='container'>
        <div className='row'>
          <div className={styles.topControlbar}>
            <h2>About me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-7'>
            <p>
              My name is Anna Kijania. A year and a half ago, I made a decision to
              change the industry. My dream was to become a Web Developer. At the
              beginning, I was learning independently from the Udemy and FreeCodeCamp
              courses. This, however, was not enough for me. In May, I started a 9-month
              Kodilla course. I had a meeting with a mentor every week. I learned React,
              Redux, JavaScript, Node.js, Express, MongoDB{' '}
            </p>
            <div className={styles.skills}>
              <h4>Skills</h4>
              <ul>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faHtml5} /> HTML/{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faSass} /> Sass
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faJs} /> JavaScript
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faBootstrap} />{' '}
                  Bootstrap
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faReact} /> React/
                  Redux
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faNode} /> Node.js/
                  Express.js
                </li>
                <li>MongoDB/ Mongoose</li>
                <li>Photoshop/ CorelDRAW</li>
              </ul>
            </div>
            <h4>Hobby</h4>
            <p>traveling, architecture, dance</p>
          </div>
          <div className='col-5'>
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h4>Contact me</h4>
                <p>mail: kijania.anna@gmail.com</p>
                <p>phone: +48 509095907</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
