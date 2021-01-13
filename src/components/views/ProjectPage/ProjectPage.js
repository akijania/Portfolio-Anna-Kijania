// import PropTypes from 'prop-types';
import React from 'react';

import PageNotFound from '../PageNotFound/PageNotFound';

import styles from './ProjectPage.module.scss';

const ProjectPage = ({ error }) => {
  if (error) return <PageNotFound />;
  else return <div className={styles.root}></div>;
};

ProjectPage.propTypes = {};

export default ProjectPage;
