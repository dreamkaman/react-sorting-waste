import HeroSlider from '../../modules/HeroSlider';

import HelpPlanet from 'modules/HelpPlanet';

import WebsiteUsersInfo from 'modules/WebsiteUsersInfo';
import WasteTypes from '../../modules/WasteTypes';


const HomePage = () => {
  return (
    <main>
      <HeroSlider />
      <WasteTypes/>
      <HelpPlanet />
      <WebsiteUsersInfo />
    </main>
  );
};

export default HomePage;
