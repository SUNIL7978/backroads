import { pageLinks } from '../data';

const PageLinks = ({ links, subLinks }) => {
  return (
    <ul className={links} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={subLinks}>
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
