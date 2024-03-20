"use client";

import Button from "./Button";

const Business = () => {
  return (
    <>
      <section id="business" className="max-container">
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box md:justify-center  md:gap-12">
          <div className="carousel-item">
            <div className="w-80 h-[480px] bg-black bg-opacity-20 rounded-[12.80px] flex flex-col p-4 justify-between text-white bg-slider1">
              <p className="text-2xl text-bold font-palanquin">Book a ride</p>
              <div className="w-[285px] h-[154px] bg-neutral-700 bg-opacity-70 rounded-[20px] flex content-center items-center p-4 mb-10">
                <p className="text-xl font-montserrat">
                  Book rides effortlessly through our mobile app, online
                  platform or by email
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-80 h-[480px] bg-black bg-opacity-20 rounded-[12.80px] flex flex-col p-4 justify-between text-white bg-slider2">
              <p className="text-2xl text-bold font-palanquin">Team Travel</p>
              <div className="w-[285px] h-[154px] bg-neutral-700 bg-opacity-70 rounded-[20px] flex content-center items-center p-4 mb-10">
                <p className="text-xl font-montserrat">
                  Book rides effortlessly through our mobile app, online
                  platform or by email
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-80 h-[480px] bg-black bg-opacity-20 rounded-[12.80px] flex flex-col p-4 justify-between text-white bg-slider3">
              <p className="text-2xl text-bold font-palanquin">For hotels</p>
              <div className="w-[285px] h-[154px] bg-neutral-700 bg-opacity-70 rounded-[20px] flex content-center items-center p-4 mb-10">
                <p className="text-xl font-montserrat">
                  Book rides effortlessly through our mobile app, online
                  platform or by email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
