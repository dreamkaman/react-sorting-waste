import Header from '../src/modules/Header';

import Footer from '../src/modules/Footer';

import MyRoutes from 'Routes';


import './App.css';
import HeroSlider from './modules/HeroSlider';


function App() {

  return (

    <div className='App'>

      <Header />

      <MyRoutes />

      <HeroSlider/>

      <Footer />

    </div>

  );

}


export default App;