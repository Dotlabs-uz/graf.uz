import Image from "next/image";

interface MentorProps {}

const Mentor: React.FC<MentorProps> = () => {
   return (
      <div className="bg-white">
         <div className="custom-container relative flex justify-center pt-52 max-md:pt-32 pb-20">
            <div className="flex flex-col items-end absolute top-6 max-xl:top-20 max-lg:top-28 max-md:top-20 left-1/2 -translate-x-1/2">
               <p className="text-[30px] max-xl:text-[24px] max-lg:text-[18px]  max-md:text-[14px] max-sm:text-[11px] font-medium absolute top-32 max-2xl:top-28 max-xl:top-20 max-lg:top-10 max-md:top-3">
                  Abdurahmonov Sohib
               </p>
               <p className="mentor text-[337px] font-black">Mentor</p>
            </div>
            <div className="relative w-[500px]">
               <p className="absolute top-36 max-lg:top-40 max-sm:top-32 -left-14 max-lg:left-0 max-md:left-10 max-sm:left-0 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white">
                  SMD kursi asoschisi
               </p>
               <p className="absolute top-96 max-sm:top-72 -left-28 max-lg:-left-14 max-md:-left-5 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white">
                  Graphic Designer
               </p>
               <p className="absolute top-56 max-sm:top-48 -right-32 max-lg:-right-12 max-md:right-0 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white">
                  Motion designer
               </p>
               <p className="absolute top-[450px] max-sm:top-80 -right-3 z-20 w-fit px-3 text-[25px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[13px] font-bold leading-[42px] max-sm:leading-[27px] rounded-[10px] bg-gradient-to-r from-[#758ca169] from-[10.02%] to-[#9595952e] to-[61.43%] backdrop-blur-md text-center text-white">
                  Video editing
               </p>
               <Image
                  className="relative z-10 max-sm:"
                  src={"/images/sohib.svg"}
                  width={1000}
                  height={1000}
                  alt="soxib"
               />
            </div>
         </div>
      </div>
   );
};

export default Mentor;
