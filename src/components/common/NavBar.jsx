import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <p>
        <strong>Youtube</strong>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </header>
  );
}