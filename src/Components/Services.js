import { services } from '../data';
import Service from './Service';
import Title from './Title';

const Services = () => {
  return (
    <section className="services section" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center service-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
