const Hero = () => {
  return (
    <section id="#home">
      <div className="w-full flex md:flex-row gap-10 max-container flex-col md:justify-between justify-center min-h-screen items-center bg-hero bg-no-repeat bg-cover bg-fixed bg-center padding-x">
        <div>
          <p className="text-white text-4xl max-lg:text-3xl max-md:text-2xl font-montserrat">
            Be a part of the future
          </p>
        </div>
        {/* Stepper */}
        <div className="md:pr-20">
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-white dark:text-white left-0">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-3 ring-white dark:ring-white dark:bg-white"></span>
              <div className=" text-stone-50 text-xl font-normal font-['Poppins'] border border-white rounded-xl px-7">
                Hilton Hyde Park
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-3 ring-white dark:ring-white dark:bg-white"></span>
              <div className=" text-stone-50 text-xl font-normal font-['Poppins'] border border-white rounded-xl px-7">
                Add a stop
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-3 ring-white dark:ring-white dark:bg-white"></span>
              <div className=" text-stone-50 text-xl font-normal font-['Poppins'] border border-white rounded-xl px-7">
                Heathrow T5
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
