import Logo from '../assets/logo.svg';
const Introduction = () => {
  return (
    <div className="z-50 relative">
      <img src={Logo} className="w-28 mx-auto mt-32 mb-12" />

      <h1 className="font-bold text-4xl text-center w-[90vw] mx-auto mb-4">A history of everything you copy</h1>

      <div className="text-center text-neutral-gray-blue w-[85vw] max-w-[650px] mx-auto mb-10">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button type="button" className="cursor-pointer bg-primary-cyan active:bg-opacity-80 mx-10 sm:mx-0 min-w-[200px] px-8 py-3 rounded-full text-white">
          Download for Mac
        </button>
        <button type="button" className="cursor-pointer bg-primary-blue active:bg-opacity-80 mx-10 sm:mx-0 min-w-[200px] px-8 py-3 rounded-full text-white">
          Download for iOS
        </button>
      </div>
    </div>
  );
};

export default Introduction;
