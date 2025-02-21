import { Link } from "react-router-dom";
import "../css/Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movies Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <br />
        <Link to="/Favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
