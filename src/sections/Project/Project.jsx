import { useState } from 'react'
import { useNav } from '../../hooks/useNav'
import ProjectTemplate from './ProjectTemplate'
import ProjectData from './ProjectData'
import Modal from 'react-modal'
import { IoCloseOutline } from 'react-icons/io5'
import './project.css'

function Project() {
    const projectRef = useNav('Home')

    // Modal
    const [imgTitle, setimgTitle] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = (e) => {
        e.preventDefault()
        setModalIsOpen(true)
        setimgTitle(e.target.alt)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <section ref={projectRef} id='projectContainer' className='project'>
            <div className='reserveTop' />
            <div className='projectTitle'>Projects</div>

            <div className='projectGalery'>
                {ProjectData.map((project) => (
                    <img
                        onClick={openModal}
                        src={project.screenshot}
                        alt={project.title}
                        className='shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'
                        key={project.title}
                    />
                ))}
            </div>

            <div className='modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className='projectModal'
                    overlayClassName='modalOverlay'
                >
                    {/* <div className='modalButton'> */}
                    <button className='' onClick={closeModal}>
                        <IoCloseOutline className='modalButton' />
                    </button>
                    {/* </div> */}

                    <div className='projectDetail'>
                        {ProjectData.filter(
                            (project) => project.title === imgTitle
                        ).map((filteredProject) => (
                            <ProjectTemplate {...filteredProject} />
                        ))}
                    </div>
                </Modal>
            </div>
        </section>
    )
}
export default Project
