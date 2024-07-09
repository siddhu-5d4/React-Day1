import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function About() {
    const navigate = useNavigate();
    const handleredirect =() =>{
        navigate("/data");
    }
  return (
    <div>
      <h1>About us</h1>
      <Link to ="/sample">Navigate to sample page</Link>
      <button onClick={handleredirect}>Click Me</button>
    </div>
  )
}

export default About
