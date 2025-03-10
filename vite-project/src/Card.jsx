import profilePic from "./assets/new.jpg.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic}
        class="img-fluid rounded-top"
        alt="profile picture"
      />
      <h2>Visal</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
        mollitia.
      </p>
    </div>
  );
}

export default Card;
