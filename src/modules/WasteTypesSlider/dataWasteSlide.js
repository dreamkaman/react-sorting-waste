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
    fullDescription:'',
  },
  {
    id: randomId(),
    image: Plastic,
    title: 'Plastic',
    description:
      'Right now, 85% of soft plastics used in Australia end up in landfill. We drop these off at collection points so they may be ',
    fullDescription:'Right now, 85% of soft plastics used in Australia end up in landfill. We drop these off at collection points so they may be ' +
      'recycled into fitness trails, outdoor furniture, drinking fountains, bike stands, bollard fences, picket fences, road and ' +
      'speed humps, rumble bars and more!',

  },
  {
    id: randomId(),
    image: Glass,
    title: 'E-waste',
    description:
      'Globally up to 80% of e-waste is illegally dumped. This is a huge problem as it often leaks large quantities of heavy metals ',
    fullDescription:'',
    /*'Globally up to 80% of e-waste is illegally dumped. This is a huge problem as it often leaks large quantities of heavy metals' +
      ' into our oceans and waterways. We take it recycling centers where it is then collected to then be processed into new products,' +
      ' such as asphalt, concrete building products, lead, new steel and batteries.'*/
  },
  {
    id: randomId(),
    image: Metal,
    title: 'Clothes',
    description:
      'Your clothes will live on as clothes, just in someone else’s wardrobe! We donate wearable clothes and work with partners ',
    fullDescription:'',
    /*'Your clothes will live on as clothes, just in someone else’s wardrobe! We donate wearable clothes and work with partners to recycle non-wearable clothes.'*/
  },
  {
    id: randomId(),
    image: Electric,
    title: 'Batteries',
    description:
      '95% of battery components can be reused and turned into new batteries. We drop them off at a recycling centre, where they get ',
    fullDescription:'',
    /*'95% of battery components can be reused and turned into new batteries. We drop them off at a recycling centre, where they get' +
      ' picked apart, ready to become new pieces of tech.'*/
  },
];
