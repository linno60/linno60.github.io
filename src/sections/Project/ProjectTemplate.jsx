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
        <div className='projectTemplate grid grid-cols-5'>
            <div className='projectItem card card-side bg-base-100 shadow-xl col-start-2 col-span-3'>
                <figure>
                    {screenshot && (
                        <div>
                            <img src={screenshot} alt={title} />
                        </div>
                    )}
                </figure>
                <div className='card-body'>
                    {title && <h4 className='card-title'>{title}</h4>}

                    {description && <div>{description}</div>}

                    {links && (
                        <div>
                            {links.map((link) => (
                                <a
                                    key={link.content}
                                    href={link.content}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='mx-3 display: inline-block'
                                >
                                    {link.iconImage}
                                </a>
                            ))}
                        </div>
                    )}

                    {stacks && (
                        <div>
                            <h4>Stacks</h4>
                            <ul>
                                {stacks.map((stack) => (
                                    <li
                                        key={stack.content}
                                        className='tooltip'
                                        data-tip={stack.content}
                                    >
                                        <img
                                            src={stack.iconImage}
                                            alt='stack Used'
                                            className='h-10 mx-2'
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
