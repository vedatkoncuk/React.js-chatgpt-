function UserCard({ name, email, city }){
  return (
    <div style={style.card}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  )
}

export default UserCard


const style = {
  card: {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "12px",
  marginBottom: "12px",
  }
}