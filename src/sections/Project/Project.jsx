import { useNav } from '../../hooks/useNav'
import ProjectTemplate from '../Project/ProjectTemplate'
import ProjectData from '../Project/ProjectData'
import './project.css'

function Project() {
    const projectRef = useNav('Home')

    return (
        <section ref={projectRef} id='projectContainer' className='project'>
            <h1>My Projects</h1>

            {ProjectData.map((project) => (
                <div className='aos-init aos-animate' data-aos='fade-up'>
                    <ProjectTemplate {...project} key={project.logo} />
                </div>
            ))}
        </section>
    )
}
export default Project
