import AboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="About" subTitle="us" />
      <div className="about-center section-center">
        <div className="about-img">
          <img src={AboutImg} alt="awesome beach" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore the difference</h3>
          <p>
            A beach is a narrow, gently sloping strip of land that lies along
            the edge of an ocean, lake, or river. Materials such as sand,
            pebbles, rocks, and seashell fragments cover beaches.
          </p>
          <p>
            Most beach materials are the products of weathering and erosion.
            Over many years, water and wind wear away at the land.
          </p>
          <a href="#home" className="btn">
            Read More
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
