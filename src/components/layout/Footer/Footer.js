import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Footer.module.scss';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col-xl-4  col-md-12 ' + styles.newText}></div>
          <div className={'col-xl-4 text-center col-md-4 ' + styles.copyright}>
            <p>©Copyright 2021 Anna Kijania</p>
          </div>
          <div className={'col-xl-4 text-right col-md-8 ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='https://github.com/akijania'>
                  <FontAwesomeIcon icon={faGithub}>Github</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='mailto:kijania.anna@gmail.com'>
                  <FontAwesomeIcon icon={faEnvelope}>Mail</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
