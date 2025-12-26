function UserCard(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", width: "250px" }}>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default UserCard;
