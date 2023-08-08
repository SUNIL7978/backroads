import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', name: 'Home' },
  { id: 2, href: '#about', name: 'About' },
  { id: 3, href: '#services', name: 'Service' },
  { id: 4, href: '#tours', name: 'Tour' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com/', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.youtube.com/', icon: 'fab fa-youtube' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Saving Money',
    text: 'Saving money is an important financial habit that can help.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Endless Hiking',
    text: 'Endless hiking can be both physically and mentally rewarding.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Amazing Comfort',
    text: 'Amazing comfort refers to a level of comfort that surpasses.',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'August 12th, 2022',
    title: 'Tibet Adventure',
    info: 'Tibet Adventure is a thrilling and unique experience that offers a glimpse into the rich Tibetan culture and stunning natural landscapes.',
    icon: 'fas fa-map',
    location: 'Kashmir',
    duration: 6,
    price: 25000,
  },
  {
    id: 2,
    img: tour2,
    date: 'October 12th, 2021',
    title: 'Best Of Java',
    info: 'The Bromo, or Mount Bromo is an active somma volcano and part of the Tengger mountains, in East Java, Indonesia',
    icon: 'fas fa-map',
    location: ' Mount Bromo',
    duration: 8,
    price: 80000,
  },
  {
    id: 1,
    img: tour3,
    date: 'January 12th, 2022',
    title: 'Explore Hong Kong',
    info: ' The postal code for Hong Kong is a 6-digit code that represents different regions within the city.',
    icon: 'fas fa-map',
    location: ' Hong-Kong',
    duration: 10,
    price: 25000,
  },
  {
    id: 4,
    img: tour4,
    date: 'August 10th, 2018',
    title: 'Agra Highlights',
    info: 'Agra is a city in India famous for its splendid monuments, with the most renowned being the Taj Mahal.',
    icon: 'fas fa-map',
    location: 'Agra',
    duration: 5,
    price: 35000,
  },
];
