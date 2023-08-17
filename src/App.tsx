import { Introduction, BackgroundImage, Feature, DevicesAccess, Tools, Logo, Outro, Footer } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 2000,
    offset: 200,
    delay: 350,
  });
  return (
    <>
      <BackgroundImage />
      <Introduction />
      <Feature />
      <DevicesAccess />
      <Tools />
      <Logo />
      <Outro />
      <Footer />
    </>
  );
}

export default App;
