import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialProps {
   social: any;
}

const Social: React.FC<SocialProps> = ({ social }) => {
   const [active, setActive] = useState(false);

   return (
      <li
         onMouseEnter={() => setActive(true)}
         onMouseLeave={() => setActive(false)}
         key={social}
         className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white"
      >
         <Link href={"#"} className="flex items-center gap-4 max-md:gap-2">
            <div className="relative">
               <div
                  className={`w-full h-full bg-[#7800B0] absolute z-[-1] top-1/2 left-1/2 duration-200 ease-out rounded-full shadow-[3px_3px_10px_#7800B0] ${
                     active
                        ? "-translate-y-[65%] -translate-x-[40%]"
                        : "-translate-y-1/2 -translate-x-1/2"
                  }`}
               ></div>
               <div
                  className={`overflow-hidden rounded-full duration-200 ease-out shadow-[3px_3px_10px_${
                     social.bg
                  }] ${active ? "translate-y-[10%] -translate-x-[5%]" : ""}`}
               >
                  <Image
                     className="w-9 max-md:w-6 max-sm:w-5"
                     src={`/images/social/${social.icon}.svg`}
                     width={1000}
                     height={1000}
                     alt="Instagram"
                  />
               </div>
            </div>
            <div className="">
               <p>{social.title}</p>
            </div>
         </Link>
      </li>
   );
};

export default Social;
