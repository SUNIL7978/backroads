const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h3 className="service-title">{title}</h3>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
