import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => (
  <nav className="nav">
    <div>
      <Link to="/" className="header">Bookstore</Link>
    </div>
    <div className="navDiv">
      <Link className="link" to="/">Books</Link>
      <Link className="link" to="/category">Category</Link>
    </div>
  </nav>
);

export default Navbar;
