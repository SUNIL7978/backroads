import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
        </div>
        <PageLinks links="nav-links" subLinks="nav-link" />
        <SocialLinks socialLink="nav-icons" socialSubLinks="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
