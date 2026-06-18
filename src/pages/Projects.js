import { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Projects.module.css'

function Projects() {
    const [projectData, setProjectData] = useState(null)
    useEffect(()=>{
        fetch('https://express-my-portfolio-production.up.railway.app/projects')
        .then(res => res.json())
        .then(data => setProjectData(data))
    }, [])
    const { darkMode } = useContext(ThemeContext)
    return (
        <div style={{ padding: '60px 40px', backgroundColor: darkMode ? '#1a1a1a' : '#ffffff', minHeight: '100vh'}}>

            <h1 style={{ color: darkMode ? 'white' : '#111', fontSize: '48px'}}>My Projects</h1>

            {projectData ? (
                projectData.map((project)=>(
                    <div className={`${styles.projectCard} ${darkMode ? styles.projectCardDark : styles.projectCardLight}`} key={project.id}>
                        <h3 className={`${styles.projectTitle} ${darkMode ? styles.projectTitleDark : styles.projectTitleLight}`}>{project.project}</h3>
                        <p className={`${styles.projectDes} ${darkMode ? styles.projectDesDark : styles.projectDesLight}`}>{project.description}</p>
                        {project.techStack.map((tech) => (
                            <span key={tech} className={`${styles.techBadge} ${darkMode ? styles.techBadgeDark : styles.techBadgeLight}`}>{tech}</span>
                        ))}
                        <a className={`${styles.githubLink}`} href={project.githubLink}>My GitHub Link</a>

                        <a className={`${styles.liveLink}`} href={project.liveLink}>My Live link</a>
                    </div>
                ))
            ) : (
                <p>Loading projects...</p>
            )}
        </div>
    )
}

export default Projects