import slider1 from './../../images/hero-slider/slider1.jpg';
import slider2 from './../../images/hero-slider/slider2.jpg';
import slider3 from './../../images/hero-slider/slider3.jpg';
import slider4 from './../../images/hero-slider/slider4.jpg';
import slider5 from './../../images/hero-slider/slider5.jpg';

import { v4 as randomId } from 'uuid';

export const data = [
  {
    id: randomId(),
    image: slider1,
    description: 'Find Sustainable Waste Services',
    titles: ['Waste Manegment.', 'Dumpster Rentals.', 'Garbage Pickup.'],
  },
  {
    id: randomId(),
    image: slider2,
    description: 'Find Sustainable Waste Services2',
    titles: ['Lorem Ipsum2', 'Dorore Ipsum2.', 'Dorore Pickup2.'],
  },
  {
    id: randomId(),
    image: slider3,
    description: 'Find Sustainable Waste Services3',
    titles: ['Lorem Ipsum3', 'Dorore Ipsum3.', 'Dorore Pickup3.'],
  },
  {
    id: randomId(),
    image: slider4,
    description: 'Find Sustainable Waste Services4',
    titles: ['Lorem Ipsum4', 'Dorore Ipsum4.', 'Dorore Pickup4.'],
  },
  {
    id: randomId(),
    image: slider5,
    description: 'Find Sustainable Waste Services5',
    titles: ['Lorem Ipsum5', 'Dorore Ipsum5.', 'Dorore Pickup5.'],
  },
];

