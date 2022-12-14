import HeroSlider from '../../modules/HeroSlider';

import HelpPlanet from 'modules/HelpPlanet';

import WebsiteUsersInfo from 'modules/WebsiteUsersInfo';
import WasteTypes from '../../modules/WasteTypes';

import ClientsSay from 'modules/ClientsSay';

import { changePasswordService } from 'API/goeco/goecoAPI';

const HomePage = () => {
  // changePasswordService(3, {
  //   oldPassword: 'Qwerty$13',
  //   newPassword: 'Qwerty$14',
  //   confirmPassword: 'Qwerty$14',
  // });

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
