// import PropTypes from 'prop-types';
import React from 'react';

import TopBar from '../TopBar/TopBar';

import styles from './Header.module.scss';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
  </header>
);

// Header.propTypes = {};

export default Header;
