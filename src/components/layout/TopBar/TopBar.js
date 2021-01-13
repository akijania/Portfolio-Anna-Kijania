import {
  faCaretDown,
  faBars,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// import PropTypes from 'prop-types';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='/#'>ANNA KIJANIA</a>
            </li>
            <li>
              <a href='/about'>about me</a>
            </li>
            <li>
              <a href='/projects'>
                projects <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='mailto:kijania.anna@gmail.com'>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> contact
              </a>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} /> +48 509095907
              </a>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
