import Paper from './../../images/waste-slider/Paper.jpg';
import Plastic from './../../images/waste-slider/Plastic.jpg';
import Glass from './../../images/waste-slider/Glass.jpg';
import Metal from './../../images/waste-slider/Metal.jpg';
import Electric from './../../images/waste-slider/Electric.jpg';

import { v4 as randomId } from 'uuid';

export const data = [
  {
    id: randomId(),
    image: Paper,
    title: 'Paper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  },
  {
    id: randomId(),
    image: Plastic,
    title: 'Plastic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  },
  {
    id: randomId(),
    image: Glass,
    title: 'Glass',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  },
  {
    id: randomId(),
    image: Metal,
    title: 'Metal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  },
  {
    id: randomId(),
    image: Electric,
    title: 'Electric Supply elements',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  },
];
