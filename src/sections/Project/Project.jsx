import { useState } from 'react'
import { useNav } from '../../hooks/useNav'
import ProjectTemplate from './ProjectTemplate'
import ProjectData from './ProjectData'
import Modal from 'react-modal'

function Project() {
    const projectRef = useNav('Home')

    // Modal
    const [imgTitle, setimgTitle] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = (e) => {
        setModalIsOpen(true)
        setimgTitle(e.target.alt)
    }

    // function afterOpenModal1() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00'
    // }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <section ref={projectRef} id='projectContainer' className='project'>
            <div className='reserveTop' />
            <div className='projectTitle'>Projects</div>

            <div className='projectGalery grid grid-cols-5'>
                <div className='projectList col-start-2 col-span-3'>
                    {ProjectData.map((project) => (
                        <img
                            onClick={openModal}
                            src={project.screenshot}
                            alt={project.title}
                            className='shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'
                            key={project.title}
                        />
                    ))}

                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        {ProjectData.filter(
                            (project) => project.title === imgTitle
                        ).map((filteredProject) => (
                            <ProjectTemplate {...filteredProject} />
                        ))}
                    </Modal>
                </div>
            </div>
        </section>
    )
}
export default Project
