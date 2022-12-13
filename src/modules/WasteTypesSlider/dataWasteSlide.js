import Paper from 'images/waste-slider/Paper.jpg';
import Plastic from 'images/waste-slider/Plastic.jpg';
import Glass from 'images/waste-slider/Glass.jpg';
import Metal from 'images/waste-slider/Metal.jpg';
import Electric from 'images/waste-slider/Electric.jpg';
import EWast from 'images/waste-slider/E-waste.jpg';
import Clothes from 'images/waste-slider/Clothes.jpg';

import { v4 as randomId } from 'uuid';

export const data = [
  {
    id: randomId(),
    image: Glass,
    title: 'Glass',
    description:
      'Glass products should never be thrown in the garbage. Glass can be easily recycled and repurposed. Be careful when you are ',
    fullDescription:
      'Glass products should never be thrown in the garbage. Glass can be easily recycled and repurposed. Be careful when you are recycling broken glass, it can be very easy to accidentally cut yourself. You should never throw broken glass in your trash bin, it should always be recycled. Be sure to rinse out all of your glass containers, and remove the lids before you recycle them.',
  },
  {
    id: randomId(),
    image: Plastic,
    title: 'Plastic',
    description:
      'Right now, 85% of soft plastics used in Australia end up in landfill. We drop these off at collection points so they may be ',
    fullDescription:
      'Right now, 85% of soft plastics used in Australia end up in landfill. We drop these off at collection points so they may be ' +
      'recycled into fitness trails, outdoor furniture, drinking fountains, bike stands, bollard fences, picket fences, road and ' +
      'speed humps, rumble bars and more!',
  },
  {
    id: randomId(),
    image: Paper,
    title: 'Paper',
    description:
      'Paper is biodegradable and should be separated in your yellow or blue bag if you live in a house. If you live in an apartment ',
    fullDescription:
      'Paper is biodegradable and should be separated in your yellow or blue bag if you live in a house. If you live in an apartment complex, there should be a designated paper recycling bin. Keep paper in a blue recycling bin at home so it is easy to transfer over to a bag on recycling day. Be sure to flatten all cardboard before putting it in the recycling bin. It takes up less space and is far more efficient.',
  },
  {
    id: randomId(),
    image: EWast,
    title: 'E-waste',
    description:
      'Globally up to 80% of e-waste is illegally dumped. This is a huge problem as it often leaks large quantities of heavy metals ',
    fullDescription:
      'Globally up to 80% of e-waste is illegally dumped. This is a huge problem as it often leaks large quantities of heavy metals' +
      ' into our oceans and waterways. We take it recycling centers where it is then collected to then be processed into new products,' +
      ' such as asphalt, concrete building products, lead, new steel and batteries.',
  },
  {
    id: randomId(),
    image: Metal,
    title: 'Metal',
    description:
      'Metals do not biodegrade in the same way as organic materials, but they can be melted down and reused, so the ideal way to ',
    fullDescription:
      'Metals do not biodegrade in the same way as organic materials, but they can be melted down and reused, so the ideal way to dispose of any scrap metal is to take it to a specialist recycling centre. To ensure the most efficient recycling, it is best to sort the metals into different types before taking them to the scrapyard.',
  },
  {
    id: randomId(),
    image: Clothes,
    title: 'Clothes',
    description:
      'Your clothes will live on as clothes, just in someone else’s wardrobe! We donate wearable clothes and work with partners ',
    fullDescription:
      'Your clothes will live on as clothes, just in someone else’s wardrobe! We donate wearable clothes and work with partners to recycle non-wearable clothes.',
  },
  {
    id: randomId(),
    image: Electric,
    title: 'Batteries',
    description:
      '95% of battery components can be reused and turned into new batteries. We drop them off at a recycling centre, where they get ',
    fullDescription:
      '95% of battery components can be reused and turned into new batteries. We drop them off at a recycling centre, where they get' +
      ' picked apart, ready to become new pieces of tech.',
  },
];
