import { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { data } from 'react-router-dom'
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
                    </div>
                ))
            ) : (
                <p>Loading projects...</p>
            )}
        </div>
    )
}

export default Projects