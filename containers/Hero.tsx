import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container flex items-center">
         <div className="relative w-full h-80">
            <h1 className="text-9xl leading-[84px] font-black text-center text-white">
               SMD 1.0
            </h1>
            <h2>GRAFUZ • SOHIB ABDURAMON</h2>
            <Image
               className="w-full h-full absolute -top-10 left-0"
               src={"/images/grid.png"}
               width={1000}
               height={1000}
               alt="grid"
            />
         </div>
         <div className="w-full">
            <div className="w-1/2">
               <Image
                  src={"/images/man.svg"}
                  width={1000}
                  height={1000}
                  alt="man"
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
