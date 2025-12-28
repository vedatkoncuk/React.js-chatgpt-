function UserCard({ name, age, job }) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", width: "250px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

export default UserCard;
