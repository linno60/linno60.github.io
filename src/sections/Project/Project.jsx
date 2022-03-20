import { useState } from 'react'
import { useNav } from '../../hooks/useNav'
import ProjectTemplate from './ProjectTemplate'
import ProjectData from './ProjectData'
import Modal from 'react-modal'
import { IoCloseOutline } from 'react-icons/io5'

function Project() {
    const projectRef = useNav('Home')

    // Modal
    let subtitle
    const [imgTitle, setimgTitle] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = (e) => {
        setModalIsOpen(true)
        setimgTitle(e.target.alt)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00'
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
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
                </div>
            </div>

            <div className='modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        },
                        content: {
                            position: 'absolute',
                            top: '20%',
                            left: '15%',
                            right: '15%',
                            bottom: '20%',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '25px',
                            outline: 'none',
                            padding: '20px',
                        },
                    }}
                >
                    <div className='modalButton'>
                        <button className='' onClick={closeModal}>
                            <IoCloseOutline size={56} />
                        </button>
                    </div>

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
