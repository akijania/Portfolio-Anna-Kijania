import Anizza_2 from '../images/Anizza_2.png';
import Anizza_3 from '../images/Anizza_3.png';
import Bazar_1 from '../images/Bazar_1.png';
import MammaMia_1 from '../images/MammaMia_1.png';
import MammaMia_2 from '../images/MammaMia_2.png';

const initialState = {
  posts: [
    {
      id: 'Anizza-Design',
      date: '18 FEB 2021',
      title: 'Anizza Design',
      description:
        'Anizza Design is an online store written in React, Redux, SASS, MongoDB, Mongoose. The site is hosted on a free Heroku account and it takes a while for the server to load',
      link: 'https://anizza-design.herokuapp.com',
      github: 'https://github.com/akijania/Anizza-design',
      technologies: [
        'React-Router for switching between subpages',
        'SCSS modules for component styles',
        'Redux state',
        'Redux-Thunk to support communication with the application backend API',
        'Axios to query the AP',
        'Express, MongoDB oraz Mongoose for fetching and saving data in db',
      ],
      image:
        'https://images.pexels.com/photos/2312250/pexels-photo-2312250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      images: [Anizza_2, Anizza_3],
    },
    {
      id: 'Bazar',
      date: '12 JAN 2021',
      title: 'Bazar',
      description:
        'Bazar is a website for a furniture store. It is a team project carried out in the Kanban methodology in Jira.',
      link: 'https://wdp-2010-01.netlify.app/',
      github: 'https://github.com/akijania/WDP-2010-01',
      technologies: [
        'React-Router for switching between subpages',
        'SCSS modules for component styles',
        'Redux state',
        'Jira',
      ],
      image:
        'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description2:
        '8 people participated in the project: 7 developers and one project manager. The project lasted 3 weeks. The task was to create a website for a furniture store. The team project was carried out in the Kanban methodology in Jira. The table consisted of 7 columns: backlog, queued, in progress, in review and done. Each team member took two tasks from the top of the to-do tasks, assigned them to himself, and put the tasks in the queued column. After completing the task, he placed it in the task column to be checked by the project manager. Team members communicated with each other on the messenger. The developers wrote a short daily summary every day to make it easier for you to track the status of tasks and the progress of other team members. Every week, an online meeting was held to summarize the progress, draw conclusions and plan the next steps in project implementation. To maintain the consistency of the resulting project, a separate branch on GitHub was created for each task. After completing the task, team members issued a Pull Request in which they described the changes. The project manager and other team members checked the task, and when there were no comments, PM merged the task into the branch master. It was the first group project I participated in, so the biggest problem was learning teamwork in Git. Due to the large number of people working on one project, very often it was necessary to resolve conflicts or wait for other developers to implement tasks. Fortunately, thanks to good communication and numerous materials that we received from Kodilla, we were able to quickly solve all the problems and get to know Git better. Participation in this project was an opportunity for efficient learning through the exchange of experiences. Daily communication with the team was very motivating to work, and when someone needed help, they quickly received it in the chat. By doing code rewiev, I could learn interesting ways to solve problems while helping other team members.',
      images: [Bazar_1],
    },
    {
      id: 'Pizzeria-Mamma-mia',
      date: '15 JAN 2021',
      title: 'Pizzeria Mamma mia',
      description:
        'Pizzeria Mamma mia is a restaurant website written in HTML, SASS and JavaScript.',
      link: 'https://blooming-fjord-08456.herokuapp.com',
      github: 'https://github.com/akijania/project-pizzeria',
      technologies: ['HTML', 'SCSS', 'Handlebars', 'JavaSctipt', 'AJAX and API'],
      image:
        'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description2:
        'At first sight, we see a modest page which graphics are subdued to shift attention to photos or product illustrations. We chose a minimalist approach so that the potential customer does not get lost among many links and he has quick access to what he is interested in. The ordering page is clear and uncomplicated at first sight - but at the same time it contains rare functionalities, such as the ability to change the default ingredients or illustrations that reflect the product options selected by the user. As a result, it will be remembered and allow you to adjust the order to individual preferences.By going to the table reservation page, the user will encounter a pleasant surprise. Rather, he would expect a telephone number where a reservation can be made - or at most a contact form. Our application, however, allows not only to check the availability of tables, but also to choose a specific one. Thanks to this, the potential customer will be able to choose a table away from the entrance, by the window or in the smoking room - depending on how we expand the restaurant map.',
      images: [MammaMia_1, MammaMia_2],
    },
    {
      id: 'administration-panel',
      date: '5 JAN 2021',
      title: 'Administration panel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://akijania.github.io/administration-panel/',
      github: 'https://github.com/akijania/administration-panel',
      image:
        'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Travel-agency',
      date: '19 DEC 2020',
      title: 'Travel agency',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://github.com/akijania/travel-agency',
      image:
        'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ],
};

export default initialState;
