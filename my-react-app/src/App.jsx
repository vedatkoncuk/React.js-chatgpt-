import UserCard from "./components/userCard";

function App() {
  return (
    <>
      <UserCard
        name = "Vedat"
        job = "Computer Engineering Student"
        age = {21}
        isOnline= {true}
        avatar= "https://i.pravatar.cc/150?img=3"
      />

      <UserCard
      name ="Ahmet"
      job = "Frontend Developer"
      age = {25}
      isOnline={false}
      avatar="https://i.pravatar.cc/150?img=5"
      />
    </>
  )
}

export default App