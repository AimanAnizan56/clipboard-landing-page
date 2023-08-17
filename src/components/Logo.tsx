import LogoGoogle from '../assets/logo-google.png';
import LogoIBM from '../assets/logo-ibm.png';
import LogoMicrosoft from '../assets/logo-microsoft.png';
import LogoHP from '../assets/logo-hp.png';
import LogoVector from '../assets/logo-vector-graphics.png';

const Logo = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-20 my-32 xl:my-40">
      <img src={LogoGoogle} alt="Google logo" className="w-40" />
      <img src={LogoIBM} alt="IBM logo" className="w-40" />
      <img src={LogoMicrosoft} alt="Microsoft logo" className="w-40" />
      <img src={LogoHP} alt="Hewlett Packard logo" className="w-40" />
      <img src={LogoVector} alt="Vector Graphics logo" className="w-40" />
    </div>
  );
};

export default Logo;
