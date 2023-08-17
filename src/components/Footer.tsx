import Logo from '../assets/logo.svg';
import Facebook from '../assets/icon-facebook.svg';
import Twitter from '../assets/icon-twitter.svg';
import Instagram from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <>
      <div className="mt-40 bg-gray-100 flex flex-col xl:flex-row xl:px-52 items-center gap-12 py-16">
        <img src={Logo} className="w-16" />
        <div className="xl:flex-1 xl:pl-5 2xl:pl-20 xl:pr-10 2xl:pr-40">
          <div className="flex flex-col xl:grid xl:grid-cols-3 justify-center items-center gap-4">
            <a href="#faq" className="xl:order-1">
              FAQs
            </a>
            <a href="#contact" className="xl:order-4">
              Contact Us
            </a>
            <a href="#privacy-policy" className="xl:order-3">
              Privacy Policy
            </a>
            <a href="#press-kit" className="xl:order-5">
              Press Kit
            </a>
            <a href="#installation" className="xl:order-3">
              Install Guide
            </a>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <a href="#facebook" className="flex justify-center items-center">
            <img src={Facebook} />
          </a>
          <a href="#twitter" className="flex justify-center items-center">
            <img src={Twitter} />
          </a>
          <a href="#instagram" className="flex justify-center items-center">
            <img src={Instagram} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
