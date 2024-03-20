import Image from "next/image";

const Privacy = () => {
  return (
    <div id="drivers" className="max-container padding-x">
      <div className=" w-full h-[500px] max-md:h-[750px]  relative bg-gradient-to-l from-neutral-600 to-neutral-600 rounded-[50px] flex-col md:items-start justify-start items-center inline-flex p-7">
        <p className="text-xl text-white text-bold font-montserrat md:text-4xl">
          Security, Privacy. That’s us.
        </p>
        <div className="flex items-center justify-center max-md:flex-col mb-10 max-md:mb-0  flex-row mt-3 md:gap-10">
          <p className="md:text-2xl text-lg text-bold font-montserrat ">
            <span className="font-black md:text-4xl">100x</span> Secure Fast
            Adaptable
          </p>
        </div>

        <div className="flex justify-center flex-col md:flex-row w-[90%] max-md:w-full max-md:items-center gap-16 max-md:gap-4">
          <div className="flex flex-col  justify-center gap-2">
            <Image
              height={50}
              width={50}
              alt="Icon"
              src="/assets/images/icon1.png"
            />
            <div>
              <p>Threat Detection</p>
              <p>AI-powered monitoring for lightning-fast defence.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Image
              height={50}
              width={50}
              alt="Icon"
              src="/assets/images/icon2.svg"
            />
            <div>
              <p>Fortified Access Control</p>
              <p>Multi-layered authentication for ironclad protection</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row w-[90%] max-md:w-full max-md:items-center gap-16 max-md:gap-4 md:mt-10">
          <div className="flex flex-col  justify-center gap-2">
            <Image
              height={50}
              width={50}
              alt="Icon"
              src="/assets/images/icon1.png"
            />
            <div>
              <p>Threat Detection</p>
              <p>AI-powered monitoring for lightning-fast defence.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Image
              height={50}
              width={50}
              alt="Icon"
              src="/assets/images/icon2.svg"
            />
            <div>
              <p>Fortified Access Control</p>
              <p>Multi-layered authentication for ironclad protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
