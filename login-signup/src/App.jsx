import { useState } from 'react'

import './App.css'
import LoginSignup from './Components/LoginSignup/LoginSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="div">
    <LoginSignup></LoginSignup>
   </div>
  )
}

export default App
