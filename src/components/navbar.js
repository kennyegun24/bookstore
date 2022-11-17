import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

import './navbar.css';

const Navbar = () => (
  <nav className="nav flex aliCnt jstSpb">
    <div className="flex gapMd">
      <div>
        <h3 className="header">Bookstore CMS</h3>
      </div>
      <div className="navDiv gap20 flex jstCnt aliCnt">
        <Link className="link link1" to="/">BOOKS</Link>
        <Link className="link link2" to="/category">CATEGORES</Link>
      </div>
    </div>
    <div className="icon">
      <FaUserAlt className="font_icon" />
    </div>
  </nav>
);

export default Navbar;
