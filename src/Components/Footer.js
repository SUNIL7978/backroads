import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks links="footer-links" subLinks="footer-link" />
      <SocialLinks socialLink="footer-icons" socialSubLinks="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
