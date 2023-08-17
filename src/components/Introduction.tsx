import Logo from '../assets/logo.svg';
const Introduction = () => {
  return (
    <div className="z-50 relative">
      <img src={Logo} className="w-28 mx-auto mt-32 mb-12" />

      <h1 className="font-bold text-4xl text-center text-neutral-dark-gray-blue w-[90vw] mx-auto mb-4">A history of everything you copy</h1>

      <div className="text-center text-neutral-gray-blue w-[85vw] max-w-[650px] mx-auto mb-10">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button type="button" className="btn-download-ios">
          Download for iOS
        </button>
        <button type="button" className="btn-download-mac">
          Download for Mac
        </button>
      </div>
    </div>
  );
};

export default Introduction;
