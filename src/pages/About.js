import "../index.css";
import photo from "../images/IMG_0105.JPG";

export default function About() {
  return (
    <div className="deck">
      <h2>About Me</h2>
      <p>
        Hello, My name is Melvin. I'm a full stack developer who is ready to
        create quick and intuitive web applications.
      </p>
      <img src={photo} alt="Melvin Finn" id="selfie"></img>
    </div>
  );
}
