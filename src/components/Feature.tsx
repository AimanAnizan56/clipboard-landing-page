import ImgComputer from '../assets/image-computer.png';

const Feature = () => {
  return (
    <>
      <div className="mb-20" data-aos="fade-up">
        <h2 className="font-bold text-3xl text-center text-neutral-dark-gray-blue w-[75vw] mx-auto mt-32 mb-4">Keep track of your snippets</h2>
        <p className="text-neutral-gray-blue text-center w-[80vw] mx-auto max-w-[700px]">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
      </div>

      <div className="flex flex-col desktop:flex-row gap-16 align-middle desktop:max-w-[70vw] desktop:mx-auto">
        <img alt="computer" src={ImgComputer} className="w-[80vw] desktop:w-[180vw] max-w-2xl desktop:max-w-[950px] mx-auto desktop:mr-0 desktop:-ml-80" data-aos="fade-right" />

        <div className="flex flex-col gap-12 justify-center">
          <div data-aos="fade-up">
            <div className="font-bold text-xl text-center text-neutral-dark-gray-blue desktop:text-left mb-2">Quick Search</div>
            <p className="text-center desktop:text-left w-[75vw] max-w-[340px] mx-auto text-neutral-gray-blue">Easily search your snippets by content, category, web address, application, and more.</p>
          </div>
          <div data-aos="fade-up">
            <div className="font-bold text-xl text-center text-neutral-dark-gray-blue desktop:text-left mb-2">iCloud Sync</div>
            <p className="text-center desktop:text-left w-[75vw] max-w-[340px] mx-auto text-neutral-gray-blue">Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div data-aos="fade-up">
            <div className="font-bold text-xl text-center text-neutral-dark-gray-blue desktop:text-left mb-2">Complete History</div>
            <p className="text-center desktop:text-left w-[75vw] max-w-[340px] mx-auto text-neutral-gray-blue">Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
