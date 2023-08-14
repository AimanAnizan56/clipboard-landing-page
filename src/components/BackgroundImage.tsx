import bgDesktop from '../assets/bg-header-desktop.png';
import bgMobile from '../assets/bg-header-mobile.png';

const BackgroundImage = () => {
  return (
    <div className="absolute top-0 left-0 z-0">
      <img src={bgDesktop} className="hidden md:block w-[100vw] h-20vh" />
      <img src={bgMobile} className="md:hidden w-[100vw] h-20vh" />
    </div>
  );
};

export default BackgroundImage;
