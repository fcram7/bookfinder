import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header className="header-container">
      <div className="header-content flex">
        <h2 className="header-logo">BookLook</h2>

        <nav className="navbar-container">
          <div className="navbar-content flex">
            <Link to="/" className="navbar-menu">Home</Link>
            <Link to="/bookfinder" className="navbar-menu">Look for books</Link>
          </div>
        </nav>
      </div>
    </header>
   );
}
 
export default Header;