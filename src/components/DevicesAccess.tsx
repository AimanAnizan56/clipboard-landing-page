import imgDevices from '../assets/image-devices.png';

const DevicesAccess = () => {
  return (
    <>
      <div className="mb-20">
        <h3 className="font-bold text-3xl text-center w-[75vw] mx-auto mt-32 mb-6">Access Clipboard Anywhere</h3>

        <p className="text-neutral-gray-blue text-center w-[88vw] max-w-[700px] mx-auto">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
      </div>

      <img src={imgDevices} className="w-[90vw] max-w-[900px] mx-auto" />
    </>
  );
};

export default DevicesAccess;
