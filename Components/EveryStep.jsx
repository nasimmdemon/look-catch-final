import Image from "next/image";

const EveryStep = () => {
  return (
    <section className="max-container padding-x mt-10">
      <div className="w-full h-[312px] bg-emerald-700 rounded-[50px] md:padding-x py-10 px-5 flex content-center items-center justify-center">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-black text-white mb-5 max-lg:text-3xl max-md:text-xl">
              Every step. Ever so green.
            </h1>
            <p className="max-md:font-sm">
              In our commitment to sustainability, we're transparent about our
              carbon footprint. Utilize our carbon footprint calculator to track
              your monthly usage and see the environmental impact of your rides.
              Together, we can make informed decisions to reduce our carbon
              footprint and create a greener future.
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              height={300}
              width={300}
              alt="flower_image"
              src="/assets/images/big_icon.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryStep;
