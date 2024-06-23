import Banner from "../../public/Banner.jpg";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[400px]">
      <div className="w-full flex">
        <div className="w-2/3">
          <div className="text-orange-400 font-light pt-16 px-28">
            With easy booking and payment
          </div>
          <div className="text-orange-400 font-bold text-6xl pt-3 px-28">
            Booked Your Court and Start Playing Today
          </div>
          <div className="flex align-middle w-2/5 bg-white ml-28 mt-8 px-10 py-3 rounded-full">Search</div>
        </div>
        <div>Cai nay de hinh anh</div>
      </div>
      <div className="z-[-1] absolute inset-0 bg-orange-600">
        <Image src={Banner} layout="fill" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
