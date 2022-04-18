import './project.css'

const icon = {
    content: '',
    iconImage: '',
}

export const ProjectItem = {
    title: '',
    screenshot: '',
    description: '',
    links: icon,
    stacks: icon,
}

const ProjectTemplate = (props) => {
    const { screenshot, title, description, links, stacks } = props

    return (
        <>
            <div className='projectTemplate'>
                <div
                    className='projectContent text-center aos-init aos-animate'
                    data-aos='fade-right'
                >
                    {title && <h2>{title}</h2>}

                    {stacks && (
                        <div className='mt-4'>
                            <ul className='mt-4'>
                                {stacks.map((stack) => (
                                    <li
                                        key={stack.content}
                                        className='tooltip'
                                        data-tip={stack.content}
                                    >
                                        <img
                                            src={stack.iconImage}
                                            alt='stack Used'
                                            className='h-10 mx-5'
                                            data-tooltip-target='tooltip-default'
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {description && (
                        <div className='mt-4 font-sans text-lg'>
                            {description}
                        </div>
                    )}

                    {links && (
                        <div className='mt-5'>
                            {links.map((link) => (
                                <a
                                    key={link.content}
                                    href={link.content}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='mx-5 display: inline-block'
                                >
                                    {link.iconImage}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <figure className='projectImg '>
                    {screenshot && (
                        <div className='shadow-lg'>
                            <img src={screenshot} alt={title} />
                        </div>
                    )}
                </figure>
            </div>
            <hr class='solid'></hr>
        </>
    )
}

export default ProjectTemplate
