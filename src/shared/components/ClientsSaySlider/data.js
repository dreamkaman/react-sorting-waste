import { v4 as uuidv4 } from 'uuid';

import img1 from 'images/for-clients-say-slider/slider-picture-1.jpg';
import img2 from 'images/for-clients-say-slider/slider-picture-2.jpg';
import img3 from 'images/for-clients-say-slider/slider-picture-3.jpg';
import img4 from 'images/for-clients-say-slider/slider-picture-4.jpg';

export const slides = [
  {
    id: uuidv4(),
    imageURL: img1,
    quote:
      'A quick and easy service that ensures my soft plastics are put to good use and do not find their way to landfill.',
    clientName: 'Tom Johnson',
  },
  {
    id: uuidv4(),
    imageURL: img2,
    quote: 'Extremely punctual. Pick up went without a hitch. Felt good to be green',
    clientName: 'Gabriel Krupp',
  },
  {
    id: uuidv4(),
    imageURL: img3,
    quote: 'What a great system! Thanks for making recycling even easier!',
    clientName: 'Kate Romano',
  },
  {
    id: uuidv4(),
    imageURL: img4,
    quote:
      "I'm a new customer of this service. And it is amazing! We had so much soft plastic waste from our business and it was such a hassle to previously recycle. This service is the best thing I've done in 2022. Absolutely effortless to use and such lovely people.",
    clientName: 'John Lea',
  },
];
