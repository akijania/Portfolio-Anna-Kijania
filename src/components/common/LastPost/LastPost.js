import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/Button';

import styles from './LastPost.module.scss';

const LastPost = ({ id, title, description, image, link }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={id} />
    </div>
    <div className={styles.body}>
      <h4>
        <a href='/#'>{title}</a>
      </h4>
      <div className={styles.button}>
        <Button href={link} variant='outline'>
          See project
        </Button>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.button}>
        <Button href={`/projects/${id}`} variant='outline'>
          Read more
        </Button>
      </div>
    </div>
  </div>
);

LastPost.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default LastPost;
