import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaPython,
    FaGithub,
} from 'react-icons/fa'

function Skills() {
    return (
        <section className='skills'>
            <h2 className='skillsTitle'>Skills</h2>
            <div className='skillInfo'>
                <div className='skillInfoList'>
                    <div className='skillItem'>
                        <h3>HTML5</h3>
                        <FaHtml5 className='skillIcon' />
                    </div>
                    <div className='skillItem'>
                        <h3>CSS3</h3>
                        <FaCss3Alt className='skillIcon' />
                    </div>
                    <div className='skillItem'>
                        <h3>JavaScript</h3>
                        <FaJsSquare className='skillIcon' />
                    </div>
                    <div className='skillItem'>
                        <h3>React</h3>
                        <FaReact className='skillIcon' />
                    </div>
                    <div className='skillItem'>
                        <h3>Python</h3>
                        <FaPython className='skillIcon' />
                    </div>
                    <div className='skillItem'>
                        <h3>Git</h3>
                        <FaGithub className='skillIcon' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
