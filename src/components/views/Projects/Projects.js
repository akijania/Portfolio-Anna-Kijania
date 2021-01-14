import React from 'react';

import LastPost from '../../common/LastPost/LastPost';
import PageNotFound from '../PageNotFound/PageNotFound';

import styles from './Projects.module.scss';

const Projects = ({ error, posts }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className='container'>
        <div className='row'>
          <div className={styles.topControlbar}>
            <h2>MY PROJECTS</h2>
          </div>
        </div>
        <div className='row'>
          {posts.map(item => (
            <div key={item.id} className={`col-md-12 col-lg-4`}>
              <LastPost key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;
