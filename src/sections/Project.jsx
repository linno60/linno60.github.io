import { useNav } from '../hooks/useNav'

function Project() {
    const projectRef = useNav('Home')
    return (
        <section ref={projectRef} id='projectContainer' className='project'>
            <h1>Project</h1>
        </section>
    )
}
export default Project
