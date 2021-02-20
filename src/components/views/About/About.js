import {
  faBootstrap,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import styles from './About.module.scss';

const About = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className={styles.topControlbar}>
          <h2>About me</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-lg-7'>
          <p>
            My name is Anna Kijania. A year and a half ago, I made a decision to change
            the industry. My dream was to become a Web Developer. At the beginning, I
            was learning independently from the Udemy and FreeCodeCamp courses. This,
            however, was not enough for me. In May, I started a 9-month Kodilla course.
            I had a meeting with a mentor every week. I learned React, Redux,
            JavaScript, Node.js, Express, MongoDB
          </p>
          <div className={styles.skills}>
            <h4>Skills</h4>
            <ul>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faHtml5} /> HTML/
                <FontAwesomeIcon className={styles.icon} icon={faSass} /> Sass
              </li>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faJs} /> JavaScript
              </li>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faBootstrap} />
                Bootstrap
              </li>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faReact} /> React/ Redux
              </li>
              <li>
                <FontAwesomeIcon className={styles.icon} icon={faNode} /> Node.js/
                Express.js
              </li>
              <li>MongoDB/ Mongoose</li>
              <li>Photoshop/ CorelDRAW</li>
            </ul>
          </div>
          <h4>Hobby</h4>
          <p>traveling, architecture, dance</p>
        </div>
        <div className='col-xs-12 col-lg-5'>
          <div className={styles.box}>
            <h4>Contact me</h4>
            <p>phone: +48 509095907</p>
            <p>e-mail: kijania.anna@gmail.com</p>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input className='form-control' type='text' id='name' required />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control' type='email' id='email' required />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message:</label>
                <textarea className='form-control' id='message' required />
              </div>
              <button type='submit' className='btn btn-primary'>
                {status}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
