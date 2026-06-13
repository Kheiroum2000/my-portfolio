import { useContext } from 'react'
import ThemeContext from '../ThemeContext'

function Projects() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div style={{ padding: '60px 40px', backgroundColor: darkMode ? '#1a1a1a' : '#ffffff', minHeight: '100vh'}}>

            <h1 style={{ color: darkMode ? 'white' : '#111', fontSize: '48px'}}>My Projects</h1>

            <p style={{color: darkMode ? '#aaa' : '#555' , marginTop: '20px', fontSize: '18px'}}>
                Projects coming soon...
            </p>
        </div>
    )
}

export default Projects