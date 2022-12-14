import HeroSlider from 'modules/HeroSlider';

import HelpPlanet from 'modules/HelpPlanet';

import WebsiteUsersInfo from 'modules/WebsiteUsersInfo';
import WasteTypes from 'modules/WasteTypes';

import ClientsSay from 'modules/ClientsSay';

const HomePage = () => {
  return (
    <main>
      <HeroSlider />
      <WasteTypes />
      <HelpPlanet />
      <WebsiteUsersInfo />
      <ClientsSay />
    </main>
  );
};

export default HomePage;
