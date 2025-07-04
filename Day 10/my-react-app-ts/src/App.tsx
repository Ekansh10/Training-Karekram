import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/message/message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Message msg={"heloo"}/>
    </div>
  )
}

export default App
