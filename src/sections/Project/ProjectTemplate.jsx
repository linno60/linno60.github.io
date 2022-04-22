import styles from './styles.module.scss'

const icon = {
    content: '',
    iconImage: '',
}

const desp = {
    idx: '',
    content: '',
}

export const ProjectItem = {
    title: '',
    screenshot: '',
    descriptions: desp,
    links: icon,
    stacks: icon,
}

const ProjectTemplate = (props) => {
    const { screenshot, title, descriptions, links, stacks } = props

    return (
        <>
            <div className={styles.projectTemplate}>
                <div
                    className={`${styles.projectContent} text-center aos-init aos-animate`}
                    data-aos='fade-right'
                >
                    {title && <h2>{title}</h2>}

                    {stacks && (
                        <div>
                            <ul className={styles.stackUsed}>
                                {stacks.map((stack) => (
                                    <li
                                        key={stack.content}
                                        className='tooltip'
                                        data-tip={stack.content}
                                    >
                                        <img
                                            src={stack.iconImage}
                                            alt='stack Used'
                                            data-tooltip-target='tooltip-default'
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {descriptions && (
                        <div>
                            <ul>
                                {descriptions.map((description) => (
                                    <li
                                        key={description.idx}
                                        className={styles.projectDesp}
                                    >
                                        <p>{description.content}</p>
                                    </li>
                                ))}
                            </ul>
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
                                    className={styles.links}
                                >
                                    {link.iconImage}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <figure className={styles.projectImg}>
                    {screenshot && (
                        <div className='shadow-lg'>
                            <img src={screenshot} alt={title} />
                        </div>
                    )}
                </figure>
            </div>
            <hr className='solid'></hr>
        </>
    )
}

export default ProjectTemplate
