function Card({ name, role, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} width="100" />

      <h2>{name}</h2>

      <p>{role}</p>
    </div>
  );
}

export default Card;