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
import './projectData.css'

const ProjectData = [
    {
        title: 'Support Desk App',
        screenshot: supportDesk,
        description: (
            <div>
                <p>
                    A support desk application allow users to
                    create/submit/view/close tickets for a product using MERN
                    stack.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://linsupportdesk.herokuapp.com/',
                iconImage: (
                    <FaLink color='#6fa8dc' size={42} className='linkIcon' />
                ),
            },
            {
                content: 'https://github.com/linno60/support-desk-app',
                iconImage: (
                    <FaGithub color='#171515' size={42} className='linkIcon' />
                ),
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
        title: 'House Market Project',
        screenshot: houseMarket,
        description: (
            <div>
                <p>
                    A house trading market allow users to rent/buy/sell their
                    property using React.js and Firebase.
                </p>
            </div>
        ),
        links: [
            {
                content:
                    'https://house-marketplace-project-linno60.vercel.app/',
                iconImage: (
                    <FaLink color='#6fa8dc' size={42} className='linkIcon' />
                ),
            },
            {
                content: 'https://github.com/linno60/house-marketplace-project',
                iconImage: (
                    <FaGithub color='#171515' size={42} className='linkIcon' />
                ),
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
            <div>
                <p>
                    A search engine allow users to search GitHub profiles and
                    see profile details using React.js and GitHub API.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://github-finder-linno60.vercel.app/',
                iconImage: (
                    <FaLink color='#6fa8dc' size={42} className='linkIcon' />
                ),
            },
            {
                content: 'https://github.com/linno60/github-finder',
                iconImage: (
                    <FaGithub color='#171515' size={42} className='linkIcon' />
                ),
            },
        ],
        stacks: [
            { content: 'HTML5', iconImage: html },
            { content: 'React', iconImage: react },
            { content: 'TailwindCSS', iconImage: tailwind },
        ],
    },

    {
        title: 'Feedback App',
        screenshot: feedbackApp,
        description: (
            <div>
                <p>
                    A feedback application allow users to give ratings and write
                    reviews for the service using React.js.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://infallible-easley-2128aa.netlify.app/',
                iconImage: (
                    <FaLink color='#6fa8dc' size={42} className='linkIcon' />
                ),
            },
            {
                content: 'https://github.com/linno60/feedback-app',
                iconImage: (
                    <FaGithub color='#171515' size={42} className='linkIcon' />
                ),
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
