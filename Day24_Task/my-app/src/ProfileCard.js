function ProfileCard({ name, age, location }) {
  return (
    <div style={{ border: "2px solid gray", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;
