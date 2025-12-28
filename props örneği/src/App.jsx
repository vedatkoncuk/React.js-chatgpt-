import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const users = [
    { id: 1, name: "Vedat", age: 21, job: "Frontend Developer" },
    { id: 2, name: "Mehmet", age: 25, job: "Backend Developer" },
    { id: 3, name: "Ayşe", age: 30, job: "UI Designer" },
  ];

  return (
    <div>
      <h1>Kullanici Listesi</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  )
}

export default App
