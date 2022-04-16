import {
    siHtml5,
    siCss3,
    siReact,
    siRedux,
    siBootstrap,
    siTailwindcss,
    siPython,
    siFirebase,
    siExpress,
    siLeaflet,
    siPostman,
    siHeroku,
    siVercel,
    siVisualstudiocode,
    siPostgresql,
    siGithub,
    siJavascript,
    siMongodb,
    siNodedotjs,
    siNpm,
    siStyledcomponents,
} from 'simple-icons/icons'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'

const icons = [
    siHtml5,
    siCss3,
    siReact,
    siRedux,
    siBootstrap,
    siTailwindcss,
    siPython,
    siFirebase,
    siExpress,
    siLeaflet,
    siPostman,
    siHeroku,
    siVercel,
    siVisualstudiocode,
    siPostgresql,
    siGithub,
    siJavascript,
    siMongodb,
    siNodedotjs,
    siNpm,
    siStyledcomponents,
]

const makeProps = () => ({
    containerProps: {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
        wheelZoom: false,
        noSelect: true,
        initial: [0.3, -0.1],
        maxSpeed: 0.02,
        minSpeed: 0.02,
    },
})

const makeIcons = (bg) =>
    icons.map((icon) =>
        renderSimpleIcon({
            icon,
            size: 90,
            aProps: {
                onClick: (e) => e.preventDefault(),
            },
        })
    )

export default function Skills() {
    const props = makeProps()
    const cloudIcons = makeIcons()

    return (
        <div style={props.root}>
            <Cloud
                containerProps={props.containerProps}
                options={props.options}
            >
                {cloudIcons}
            </Cloud>
        </div>
    )
}
