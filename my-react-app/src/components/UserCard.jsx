function UserCard({ name, email, city }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

export default UserCard;
