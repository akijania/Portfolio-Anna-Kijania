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
          <div className='col-9'></div>
          <div className='col-3'></div>
        </div>
      </div>
    );
};

export default About;
