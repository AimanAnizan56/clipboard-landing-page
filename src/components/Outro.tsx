const Outro = () => {
  return (
    <>
      <div>
        <div data-aos="fade-up">
          <h4 className="font-bold text-3xl text-center text-neutral-dark-gray-blue w-[80vw] mx-auto mb-10">Clipboard for iOS and Mac OS</h4>

          <p className="text-neutral-gray-blue text-center w-[80vw] max-w-[720px] mx-auto mb-10">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up">
          <button role="button" className="btn-download-ios">
            Download for iOS
          </button>
          <button role="button" className="btn-download-mac">
            Download for Mac
          </button>
        </div>
      </div>
    </>
  );
};
export default Outro;
