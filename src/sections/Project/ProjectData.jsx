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

const ProjectData = [
    {
        title: 'Support Desk App',
        screenshot: supportDesk,
        description: (
            <div>
                <p>
                    The product of learning MERN stack. It allows user to
                    create/view/close tickets of a chosen product.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://linsupportdesk.herokuapp.com/',
                iconImage: <FaLink color='#6fa8dc' size={42} />,
            },
            {
                content: 'https://github.com/linno60/support-desk-app',
                iconImage: <FaGithub size={42} />,
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
                    A project using Firebase. It allows user to buy/rent/sell
                    their residence.
                </p>
            </div>
        ),
        links: [
            {
                content:
                    'https://house-marketplace-project-linno60.vercel.app/',
                iconImage: <FaLink color='#6fa8dc' size={42} />,
            },
            {
                content: 'https://github.com/linno60/house-marketplace-project',
                iconImage: <FaGithub size={42} />,
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
                    A web app using GitHub API. Users can find a GiHub user with
                    info.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://github-finder-linno60.vercel.app/',
                iconImage: <FaLink color='#6fa8dc' size={42} />,
            },
            {
                content: 'https://github.com/linno60/github-finder',
                iconImage: <FaGithub size={42} />,
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
                    A simple web app using React. Users can select ratings and
                    write reviews.
                </p>
            </div>
        ),
        links: [
            {
                content: 'https://infallible-easley-2128aa.netlify.app/',
                iconImage: <FaLink color='#6fa8dc' size={42} />,
            },
            {
                content: 'https://github.com/linno60/feedback-app',
                iconImage: <FaGithub size={42} />,
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
