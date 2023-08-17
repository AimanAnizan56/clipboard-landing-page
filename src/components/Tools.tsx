import Blacklist from '../assets/icon-blacklist.svg';
import Text from '../assets/icon-text.svg';
import Preview from '../assets/icon-preview.svg';

const Tools = () => {
  return (
    <>
      <div className="my-24">
        <h4 className="font-bold text-3xl text-center text-neutral-dark-gray-blue w-[75vw] mx-auto mb-4">Supercharge your workflow</h4>
        <p className="text-neutral-gray-blue text-center w-[75vw] mx-auto">We’ve got the tools to boost your productivity.</p>
      </div>

      <div className="flex flex-col xl:flex-row justify-center gap-16">
        <div>
          <img src={Blacklist} alt="blacklist icon" className="mx-auto mb-10 h-8" />
          <div className="font-bold text-center text-2xl text-neutral-dark-gray-blue mb-4">Create blacklists</div>
          <p className="text-neutral-gray-blue text-center w-[360px] mx-auto">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>
        <div>
          <img src={Text} alt="text icon" className="mx-auto mb-10" />
          <div className="font-bold text-center text-2xl text-neutral-dark-gray-blue mb-4">Plain text snippets</div>
          <p className="text-neutral-gray-blue text-center w-[360px] mx-auto">Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        <div>
          <img src={Preview} alt="preview icon" className="mx-auto mb-10" />
          <div className="font-bold text-center text-2xl text-neutral-dark-gray-blue mb-4">Sneak preview</div>
          <p className="text-neutral-gray-blue text-center w-[360px] mx-auto">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>
    </>
  );
};

export default Tools;
