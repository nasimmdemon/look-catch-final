import Image from "next/image";

const ScrollDown = () => {
  return (
    <div className="w-full h-[357px] md:flex-row flex-col max-container bg-gradient-to-r from-slate-900 to-blue-800 flex items-center justify-center gap-16">
      <div className="text-center">
        <p className="text-white text-3xl font-palanquin">
          It’s just the beginning...
        </p>
        <p className="font-montserrat text-xl text-white font-thin">
          Coming soon
        </p>
      </div>
      <div>
        <a href="#drivers">
          <Image
            height={60}
            width={60}
            src="/assets/images/scrool_down.png"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default ScrollDown;
