import { useState, useEffect, useContext } from "react";
import styles from './Users.module.css'
import ThemeContext from "../ThemeContext";

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading]  = useState(true)
    const [error, setError] = useState(null)
    const { darkMode } = useContext(ThemeContext)


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            if (!res.ok){
                throw new Error('Failed to fetch')
            }
            return res.json()
        })
        .then(data =>{
            setUsers(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p className={`${styles.loading} ${darkMode ? styles.loadingDark : styles.loadingLight}`}>Loading users...</p>
    }

    if(error) return <p className={`${styles.error}`}>Error: {error}</p>

    return (
        <div className={`${styles.outerWrapper} ${darkMode ? styles.outerWrapperDark : styles.outerWrapperLight}`}>

            <h2 className={`${styles.title} ${darkMode ? styles.titleDark : styles.titleLight}`}>Team Members</h2>

            <div className={`${styles.innerWrapper}`}>
                {users.map((user)=> (
                     <div key={user.id}
                        className={`${styles.userId} ${darkMode ? styles.userIdDark : styles.userIdLight}`}>

                 <h3>{user.name}</h3>
                <p className={`${styles.userEmail}`}>
              {user.email}
                </p>
                    <p className={`${styles.userCompName} ${darkMode ? styles.userCompNameDark : styles.userCompNameLight}`}>
              {user.company.name}
                </p> 

            </div>

            ))}
        </div>

        </div>
    )

}

export default Users