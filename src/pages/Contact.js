import { useContext, useState } from "react"
import ThemeContext from "../ThemeContext"

function Contact() {
  const { darkMode } = useContext(ThemeContext)
  const [name, setName]   =useState('')
  const [email, setEmail] =useState('')
  const [message, setMessage] =useState('')
  const [errors, setErrors] =useState({})
  const [submitted, setSubmitted] =useState(false)

  const validate = ()=> {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!email.includes('@')) {
      newErrors.email = 'Email must contain @'
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleSubmit = () => {
    const foundErrors = validate()

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }

    setSubmitted(true)
    
  fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({name: name, email: email, message: message})
  })

  .then(res => res.json())
  .then(data => setErrors({}));
  

  }

  if (submitted) {
      return (
        <div style={{ padding: '60px 40px', backgroundColor: darkMode ? '#1a1a1a' : '#ffffff', minHeight: '100vh'}}>
          <h1 style={{ color: '#00bcd4', fontSize: '48px'}}>Message Sent!</h1>
          <p style={{ color: darkMode ? '#aaa' : '#555', marginTop: '16px', fontSize: '18px'}}>Thanks {name}, I'll get back to you soon!</p>
        </div>
      )
  }

  return (
    <div style={{ padding: '60px 40px',
    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
    minHeight: '100vh' }}>

      <h1 style={{ color: darkMode ? 'white' : '#111',
      fontSize: '48px' }}>Contact Me</h1>

      {/* {Name Field} */}
      <div style={{ marginBottom: '24px'}}>
        <label style={{ color: darkMode ? 'White' : '#111', display: 'block',marginBottom: '8px', fontSize: '16px'}}>Name</label>

        <input
            type="text"
            value={name}
            onChange={(e)=> {setName(e.target.value)
              if (errors.name) setErrors({...errors, name: ''})
            }}
            placeholder="Your name"
            style={{ width: '100%', maxWidth: '500px', outline:'none', padding:'12px', borderRadius: '8px', border: errors.name ? '2px solid red' : '2px solid #00bcd4', backgroundColor: darkMode ? '#111' : '#f0f0f0', color: darkMode ? 'white' : '#111', fontSize: '16px'}}/>

        {errors.name && (
          <p style={{color: 'red', marginTop: '6px'}}>{errors.name}</p>
        )}
      </div>

      {/* {Email Field} */}

      <div style={{ marginBottom: '24px'}}>
        <label style={{ color: darkMode ? 'White' : '#111', display: 'block',marginBottom: '8px', fontSize: '16px'}}>Email</label>

        <input
            type="email"
            value={email}
            onChange={(e)=> {setEmail(e.target.value)
              if (errors.email) setErrors({...errors, email: ''})
            }}
            placeholder="your@email.com"
            style={{ width: '100%', maxWidth: '500px', outline:'none', padding:'12px', borderRadius: '8px', border: errors.email ? '2px solid red' : '2px solid #00bcd4', backgroundColor: darkMode ? '#111' : '#f0f0f0', color: darkMode ? 'white' : '#111', fontSize: '16px'}}/>

        {errors.email && (
          <p style={{color: 'red', marginTop: '6px'}}>{errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: '24px'}}>
        <label style={{ color: darkMode ? 'White' : '#111', display: 'block',marginBottom: '8px', fontSize: '16px'}}>Message</label>

        <textarea
            type="text"
            value={message}
            onChange={(e)=> {setMessage(e.target.value) 
              if (errors.message) setErrors({...errors, message:''})
            }}
            placeholder="Your Message..."
            rows={6}
            style={{ width: '100%', maxWidth: '500px', padding:'12px', outline:'none', borderRadius: '8px', border: errors.name ? '2px solid red' : '2px solid #00bcd4', backgroundColor: darkMode ? '#111' : '#f0f0f0', color: darkMode ? 'white' : '#111', fontSize: '16px', resize: 'vertical' }}/>

        {errors.message && (
          <p style={{color: 'red', marginTop: '6px'}}>{errors.message}</p>

        )}
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} style={{ padding: '14px 32px', backgroundColor: '#00bcd4', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer'}}>Send Message</button>


    </div>
  )
}

export default Contact