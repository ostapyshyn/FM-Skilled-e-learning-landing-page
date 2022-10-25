import './App.scss';
import About from './components/About';
import InfoBlock from './components/InfoBlock';
import Main from './components/Main';

import logo_light from '../src/assets/svg/logo-light.svg';
import logo_dark from '../src/assets/svg/logo-dark.svg';

function App() {
  const button_color = '#13183F';
  const button_footer_color = 'linear-gradient(180deg, #4851ff -54.32%, #f02aa6 100%)';

  return (
    <div className="App">
      <div className="hero-image"></div>
      <About img={logo_dark} btnColor={button_color} />
      <InfoBlock />
      <Main />
      <About backColor={'--dark-blue'} img={logo_light} btnColor={button_footer_color} />
    </div>
  );
}

export default App;
