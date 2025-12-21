import UserCard from "./components/UserCard"
import { userEffect, useState } from "react"


function App() {
  
  const [users, setUsers] = useState([])

  userEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
  },[])

  return (
    <>
      <h1>User List (API)</h1>

      {userEffect.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </>
  )
}

export default App