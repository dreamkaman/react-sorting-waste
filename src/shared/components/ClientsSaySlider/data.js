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
      'We really appreciated agency`s hands-on approach as well as their ability to contribute not just with design but with the overall idea of the project',
    clientName: 'Michael Johnson1',
  },
  {
    id: uuidv4(),
    imageURL: img2,
    quote:
      'We really appreciated agency`s hands-on approach as well as their ability to contribute not just with design but with the overall idea of the project',
    clientName: 'Michael Johnson2',
  },
  {
    id: uuidv4(),
    imageURL: img3,
    quote:
      'We really appreciated agency`s hands-on approach as well as their ability to contribute not just with design but with the overall idea of the project',
    clientName: 'Michael Johnson3',
  },
  {
    id: uuidv4(),
    imageURL: img4,
    quote:
      'We really appreciated agency`s hands-on approach as well as their ability to contribute not just with design but with the overall idea of the project',
    clientName: 'Michael Johnson4',
  },
];
