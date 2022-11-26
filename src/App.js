import Header from '../src/modules/Header';

import Footer from '../src/modules/Footer';

import HelpPlanet from 'modules/HelpPlanet';

import WebsiteUsersInfo from 'modules/WebsiteUsersInfo';

import MyRoutes from 'Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <MyRoutes />

      <Footer />
    </div>
  );
}

export default App;
