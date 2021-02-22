// import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/Button/Button';
import PageNotFound from '../PageNotFound/PageNotFound';

import styles from './ProjectPage.module.scss';

const ProjectPage = ({ error, project }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`col-xs-12 col-md-6 ${styles.image}`}>
              {project.images &&
                project.images.map(image => (
                  <img key={image} src={image} alt={project.title} />
                ))}
            </div>
            <div className={`col-xs-12 col-md-6 ${styles.contentBox}`}>
              <h2>{project.title}</h2>
              <div className={styles.button}>
                <Button href={project.link} variant='outline'>
                  See project
                </Button>
                <Button href={project.github} variant='outline'>
                  See GitHub
                </Button>
              </div>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                <h4>Technologies</h4>
                <ul>
                  {project.technologies &&
                    project.technologies.map(item => <li key={item}>{item} </li>)}
                </ul>
              </div>
              <p>{project.description2}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

ProjectPage.propTypes = {};

export default ProjectPage;
