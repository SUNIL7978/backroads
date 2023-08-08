import { socialLinks } from '../data';

const SocialLinks = ({ socialLink, socialSubLinks }) => {
  return (
    <ul className={socialLink}>
      {socialLinks.map((links) => {
        const { id, href, icon } = links;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel=" noreferrer"
              className={socialSubLinks}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
