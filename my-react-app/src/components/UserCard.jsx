function UserCard({ name, job, age, isOnline }){
  return (
    <div style={style.card}>
      <img src="{avatar}" alt="{name}" style={style.image} />

      <h2>{name}</h2>
      <p>{job}</p>
      <p>Yaş: {age}</p>

      <span style={{ color: isOnline ? 'green' : 'red'}}>
      {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}

export default UserCard


const style = {
  card:{
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "16px",
  width: "220px",
  marginBottom: "16px",
  textAlign: "center"
  },
  image: {
    width: "100px",
    borderRadius: "50%"
  }
}