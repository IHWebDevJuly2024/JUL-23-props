import "./Card.css";

function Card(props) {
  // props is : props = { username: "Mica", role: "teacher"}
  const { userName, role } = props;

  return (
    <div className="card">
      <img src="https://i.pravatar.cc/300" alt="" />
      <p>Name: {userName}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default Card;
