import React from 'react';

// import PropTypes from 'prop-types';
import Hello from '../../features/Hello/Hello';
import LatestProject from '../../features/LastestProjects/LatestProjectsContainer';

import styles from './Homepage.module.scss';

const Homepage = () => (
  <div className={styles.root}>
    <Hello />
    <LatestProject />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
