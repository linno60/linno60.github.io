import { useNav } from '../../hooks/useNav'
import ProjectTemplate from '../Project/ProjectTemplate'
import ProjectData from '../Project/ProjectData'
import './project.css'

function Project() {
    const projectRef = useNav('Home')

    return (
        <section ref={projectRef} id='projectContainer' className='project'>
            <hr className='solid'></hr>
            <h1>My Projects</h1>

            {ProjectData.map((project) => (
                <div
                    key={project.title}
                    className='aos-init aos-animate'
                    data-aos='fade-up'
                >
                    <ProjectTemplate {...project} />
                </div>
            ))}
        </section>
    )
}
export default Project
