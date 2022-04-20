import mongoDB from '../../assets/images/mongoDB.png'
import express from '../../assets/images/express.png'
import react from '../../assets/images/react.png'
import node from '../../assets/images/node.png'
import redux from '../../assets/images/redux.png'
import firebase from '../../assets/images/firebase.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import leaflet from '../../assets/images/leaflet.png'
import tailwind from '../../assets/images/tailwind.png'

import supportDesk from '../../assets/screenshots/supportDesk.png'
import houseMarket from '../../assets/screenshots/houseMarket.png'
import githubFinder from '../../assets/screenshots/githubFinder.png'
import feedbackApp from '../../assets/screenshots/feedbackApp.png'

import { FaGithub, FaLink } from 'react-icons/fa'
import './project.css'

const ProjectData = [
    {
        title: <h2>Support Desk</h2>,
        screenshot: supportDesk,
        description: (
            <div className='dataDescription'>
                <ul>
                    <li>
                        <p>
                            A support desk web application that allows user to
                            create and manage tickets for electronic devices
                            using MongoDB, Express.js, React.js and Node.js
                        </p>
                    </li>
                    <li>
                        <p>
                            Applied Redux Toolkit to manage the state of user
                            authentication, tickets and notes, Axios for HTTP
                            Client, Mongoose for the creation of data models,
                            and JSON Web Token for secure data transmission
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilized Postman for API testing of users, tickets
                            and notes
                        </p>
                    </li>
                </ul>
            </div>
        ),
        links: [
            {
                content: 'https://linsupportdesk.herokuapp.com/',
                iconImage: <FaLink size={42} className='linkIcon' />,
            },
            {
                content: 'https://github.com/linno60/support-desk-app',
                iconImage: <FaGithub size={42} className='linkIcon' />,
            },
        ],
        stacks: [
            { content: 'MongoDB', iconImage: mongoDB },
            { content: 'Express', iconImage: express },
            { content: 'React', iconImage: react },
            { content: 'Redux', iconImage: redux },
            { content: 'Node.js', iconImage: node },
        ],
    },

    {
        title: 'House Market',
        screenshot: houseMarket,
        description: (
            <div className='dataDescription'>
                <ul>
                    <li>
                        <p>
                            A house trading market web application that allows
                            user to rent/buy/sell their property using React.js
                            and Firebase
                        </p>
                    </li>
                    <li>
                        <p>
                            Fulfilled sign up, single sign-on with Google
                            account, and send password reset email using
                            Firebase Authentication, and stored data of users
                            and property listings using Firebase Firestore
                            Database
                        </p>
                    </li>
                    <li>
                        <p>
                            Used React packages, such as Leaflet to show
                            location on map, Swiper to demonstrate image slider
                            of houses, and React-Toastify to display
                            notifications
                        </p>
                    </li>
                </ul>
            </div>
        ),
        links: [
            {
                content:
                    'https://house-marketplace-project-linno60.vercel.app/',
                iconImage: <FaLink size={42} className='linkIcon' />,
            },
            {
                content: 'https://github.com/linno60/house-marketplace-project',
                iconImage: <FaGithub size={42} className='linkIcon' />,
            },
        ],
        stacks: [
            { content: 'React', iconImage: react },
            { content: 'Firebase', iconImage: firebase },
            { content: 'Leaflet', iconImage: leaflet },
        ],
    },

    {
        title: 'Github Finder',
        screenshot: githubFinder,
        description: (
            <div className='dataDescription'>
                <ul>
                    <li>
                        <p>
                            A search engine that lets the user to search GitHub
                            profiles and see profile details using React.js and
                            GitHub API
                        </p>
                    </li>
                    <li>
                        <p>
                            Used react packages, such as tailwindCSS, daisyUI,
                            react-icons to develop and implement frontend
                            components
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed a responsive web to optimize the appearance
                            of the site depending on the screen size such as for
                            desktops, tablets and mobiles
                        </p>
                    </li>
                </ul>
            </div>
        ),
        links: [
            {
                content: 'https://github-finder-linno60.vercel.app/',
                iconImage: <FaLink size={42} className='linkIcon' />,
            },
            {
                content: 'https://github.com/linno60/github-finder',
                iconImage: <FaGithub size={42} className='linkIcon' />,
            },
        ],
        stacks: [
            { content: 'HTML5', iconImage: html },
            { content: 'React', iconImage: react },
            { content: 'TailwindCSS', iconImage: tailwind },
        ],
    },

    {
        title: 'Feedback',
        screenshot: feedbackApp,
        description: (
            <div className='dataDescription'>
                <ul>
                    <li>
                        <p>
                            A feedback application that allows user to rate and
                            review the service using React.js
                        </p>
                    </li>
                    <li>
                        <p>
                            Included edit and delete such that user can manage
                            existing reviews and return a new average rating
                        </p>
                    </li>
                    <li>
                        <p>
                            Used React Router Dom for routing and Framer Motion
                            for the animation of adding and removing a review
                        </p>
                    </li>
                </ul>
            </div>
        ),
        links: [
            {
                content: 'https://infallible-easley-2128aa.netlify.app/',
                iconImage: <FaLink size={42} className='linkIcon' />,
            },
            {
                content: 'https://github.com/linno60/feedback-app',
                iconImage: <FaGithub size={42} className='linkIcon' />,
            },
        ],
        stacks: [
            { content: 'HTML5', iconImage: html },
            { content: 'CSS3', iconImage: css },
            { content: 'React', iconImage: react },
        ],
    },
]

export default ProjectData
