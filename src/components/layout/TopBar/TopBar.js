import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// import PropTypes from 'prop-types';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-sm-8 col-md-6 text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a className={styles.name} href='/#'>
                ANNA KIJANIA
              </a>
            </li>
            <li>
              <a href='/about'>about me</a>
            </li>
            <li>
              <a href='/projects'>projects</a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <a href='mailto:kijania.anna@gmail.com'>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> contact me
          </a>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
