import { useState, useEffect } from "react"

function useDarkMode() {
    const[darkMode, setdarkMode] = useState(()=> {
      const saved =localStorage.getItem('darkMode')
      return saved !== null ? saved === 'true' : true
    })

    useEffect(()=>{
      localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return [darkMode, setdarkMode]
}

export default useDarkMode