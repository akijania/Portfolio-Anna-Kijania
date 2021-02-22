import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import MyImage from '../../../images/akijania.png';

import styles from './Hello.module.scss';

class Hello extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row no-gutters align-items-center ' + styles.welcome}>
            <div className={'col-sm-12 col-lg-7 ' + styles.box}>
              <h1>Hello!</h1>
              <p>
                I am Ania. Hardworking Architect and Web Developer. Ready to utilize my
                skills and passion to further the mission of company. Technologically
                adept, offering experience with graphic programs and good knowledge of
                Javascript, React and Node.js. Bringing forth o positive attitude,
                willingness and motivation to learn new projects.
              </p>
              <hr></hr>
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
            <div className='col-sm-12 col-lg-5 align-items-center'>
              <img src={MyImage} alt='myPhoto'></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hello.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      comments: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Hello;
