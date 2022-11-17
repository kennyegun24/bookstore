import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

import './navbar.css';

const Navbar = () => (
  <nav className="nav flex aliCnt jstSpb">
    <div className="flex gapMd">
      <div>
        <h3 className="header">Bookstore</h3>
      </div>
      <div className="navDiv gap20 flex jstCnt aliCnt">
        <Link className="link" to="/">Books</Link>
        <Link className="link" to="/category">Category</Link>
      </div>
    </div>
    <div className="icon">
      <FaUserAlt />
    </div>
  </nav>
);

export default Navbar;
