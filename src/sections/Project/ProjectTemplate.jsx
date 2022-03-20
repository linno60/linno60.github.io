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
        <div className='projectTemplate'>
            <div className='projectItem grid grid-cols-2 gap-5'>
                <figure>
                    {screenshot && (
                        <div className='shadow-lg'>
                            <img src={screenshot} alt={title} />
                        </div>
                    )}
                </figure>
                <div className='text-center'>
                    {title && (
                        <h4 className='font-sans text-3xl font-bold'>
                            {title}
                        </h4>
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

                    {stacks && (
                        <div className='mt-4'>
                            <h4 className='font-sans text-xl'>Stacks</h4>
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
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate
