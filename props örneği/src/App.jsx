import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>User Dashboard</h1>

      <UserCard
        name="Baran"
        age={21}
        job="Computer Engineering Student"
      />

      <UserCard
        name="Mehmet"
        age={30}
        job="Frontend Developer"
      />

      <UserCard
        name="Ayşe"
        age={28}
        job="UI Designer"
      />
    </div>
  )
}

export default App
