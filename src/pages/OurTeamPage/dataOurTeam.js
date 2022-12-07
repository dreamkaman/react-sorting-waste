import AshkhenGevorgyan from './../../images/our-team/AshkhenGevorgyan.jpg';
import BabkenSargsyan from './../../images/our-team/BabkenSargsyan.jpg';
import AnnaSargsyan from './../../images/our-team/AnnaSargsyan.jpg';
import VolodymyrRiabushko from './../../images/our-team/VolodymyrRiabushko.jpg';
import TejaswiniYellayyagari from './../../images/our-team/TejaswiniYellayyagari.jpg';
import AndriiTretiak from './../../images/our-team/AndriiTretiak.jpg';
import IhorOnishchenko from './../../images/our-team/IhorOnishchenko.jpg';

import { v4 as randomId } from 'uuid';

export const dataPeople = [
  {
    id: randomId(),
    name: 'Anna Sargsyan',
    image: AnnaSargsyan,
    role: 'QA Engineer/Scrum Master',
  },
  {
    id: randomId(),
    name: 'Babken Sargsyan',
    image: BabkenSargsyan,
    role: 'Backend developer',
  },
  {
    id: randomId(),
    name: 'Ashkhen Gevorgyan',
    image: AshkhenGevorgyan,
    role: 'QA Engineer/Copywriter',
  },
  {
    id: randomId(),
    name: 'Volodymyr Riabushko',
    image: VolodymyrRiabushko,
    role: 'Frontend developer',
  },
  {
    id: randomId(),
    name: 'Tejaswini Yellayyagari',
    image: TejaswiniYellayyagari,
    role: 'Backend developer',
  },
  {
    id: randomId(),
    name: 'Andrii Tretiak',
    image: AndriiTretiak,
    role: 'Frontend developer',
  },
  {
    id: randomId(),
    name: 'Ihor Onishchenko',
    image: IhorOnishchenko,
    role: 'Frontend developer',
  },
];
