const Card = (image, title, description) => {
  return (
    <div className="w-80 h-[480px] bg-black bg-opacity-20 rounded-[12.80px] flex flex-col p-4 justify-between text-white bg-slider1">
      <p className="text-xl text-bold font-palanquin">Book a ride</p>
      <div className="w-[285px] h-[154px] bg-neutral-700 bg-opacity-70 rounded-[20px] flex content-center items-center p-4">
        <p className="text-lg font-montserrat">
          Book rides effortlessly through our mobile app, online platform or by
          email
        </p>
      </div>
    </div>
  );
};

export default Card;
