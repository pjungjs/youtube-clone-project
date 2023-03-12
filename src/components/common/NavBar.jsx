import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <p>
        <Link to="/"><strong>Youtube</strong></Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/">About</Link>
      </p>
    </header>
  );
}