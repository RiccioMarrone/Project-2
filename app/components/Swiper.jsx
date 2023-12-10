import { Carousel } from "flowbite-react";
//Icon
import { CiPlay1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const SwiperComponent = () => {
  return (
    <div className="lg:hidden w-screen min-w-[700px] bg-red-400 box-slider bg-left text-[17px]">
      {/* Mobile */}
      <div className="grid w-full h-full grid-cols-12 grid-rows-6 ">
        {/* Container Btn Watch */}
        <div className="row-start-5 col-span-full flex items-center justify-center w-full min-w-[400px] h-auto gap-2">
          <span className="flex items-center justify-center w-4/6 gap-5 bg-orange-400">
            <CiPlay1 className="text-black text-[2em] font-semibold" />

            <p className="text-[1.5em]  font-bold py-5 md:py-3 text-black">
              Inizia a guardare S1 E1
            </p>
          </span>

          <span className="flex items-center justify-center w-1/6 py-5 bg-orange-400 md:py-3">
            <CiBookmark className=" text-black font-bold text-[2em] " />
          </span>

          {/* Table view */}
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
