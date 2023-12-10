import { Carousel } from "flowbite-react";
//Icon
import { CiPlay1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const SwiperComponent = () => {
  return (
    <div className="lg:hidden w-screen min-w-[700px] bg-red-400 box-slider bg-left text-[17px]">
      {/* Mobile */}
      <div className="flex flex-col items-center justify-end w-full h-full md:hidden">
        {/* Container Btn Watch */}
        <div className="flex items-center justify-center w-full min-w-[400px] h-auto gap-2">
          <span className="flex items-center justify-center w-4/6 gap-5 bg-orange-400">
            <CiPlay1 className="text-black text-[1.5em]" />

            <p className="text-[1.5em] py-5 text-black">
              Inizia a guardare S1 E1
            </p>
          </span>

          <span className="flex items-center justify-center w-1/6 h-full bg-orange-400">
            <CiBookmark className=" text-black text-[1.6em]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
