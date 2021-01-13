import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/Button';

import styles from './LastPost.module.scss';

const LastPost = ({ id, title, description, image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={id} />
    </div>
    <div className={styles.body}>
      <h4>
        <a href='/#'>{title}</a>
      </h4>
      <p className={styles.description}>{description}</p>
      <div className={'row ' + styles.button}>
        <div className='col-sm-6 col-lg-12'>
          <Button href={`/projects/${id}`} variant='medium'>
            Read more
          </Button>
        </div>
        <div className='col-sm-6 col-lg-12'>
          <Button href={`/projects/${id}`} variant='medium'>
            See project
          </Button>
        </div>
      </div>
    </div>
  </div>
);

LastPost.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default LastPost;
