import { v4 as uuidv4 } from 'uuid';
import nucbaImg from '../images/nucba.png';
import CafeImg from '../images/pag-cafe.jpg';
import FetchApiImg from '../images/fetchApi.png';
import NucbaFestImg from '../images/nbaFest.jpg';
import michiCakeImg from '../images/michicake.jpg';
import CommerceImg from '../images/commerce.png';

const projects = [
  {
    id: uuidv4(),
    name: 'NUCBA coffee',
    desc:
      'In this project I started in nucba using the basics of HTML, CSS, JS and a bit of Bootstrap',
    img: CafeImg,
  },
  {
    id: uuidv4(),
    name: 'Fetch API ',
    desc: 'Here I create a Fetch API to get data from random people',
    img: FetchApiImg,
  },
  {
    id: uuidv4(),
    name: 'Nucba fest',
    desc: 'Here you can see a project of an event ',
    img: NucbaFestImg,
  },
  {
    id: uuidv4(),
    name: 'Michi Cake',
    desc: 'Marketing, packaging creation, design with illustrator MichiCake',
    img: michiCakeImg,
  },
  {
    id: uuidv4(),
    name: 'Nucba',
    desc:
      'At Nucba I create many projects that will help me strengthen my knowledge as a software specialist and be a FullStack developer.',
    img: nucbaImg,
  },
  {
    id: uuidv4(),
    name: 'Ecommerce Web Store',
    desc: 'Build and Deploy an Amazing App | React.js, Commerce.js, Stripe.',
    img: CommerceImg,
  },
];

export default projects;
