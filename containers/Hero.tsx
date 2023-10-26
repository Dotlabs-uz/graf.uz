import Image from "next/image";

import { motion } from "framer-motion";
import Item from "@/components/children/Item";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <>
         <div className="custom-container relative flex max-md:flex-col items-center justify-between">
            <div className="w-1/2 max-sm:w-full px-5">
               <motion.div
                  initial={{
                     opacity: 0,
                     y: 100,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                     transition: {
                        // delay: 0.1,
                        type: "spring",
                        stiffness: 20,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-[80%] absolute z-[-1] top-0 left-[10%] -translate-x-1/2 max-md:hidden"
               >
                  <Image
                     className="w-full h-full"
                     src={"/images/smd.svg"}
                     width={1000}
                     height={1000}
                     alt="smd"
                  />
               </motion.div>
               <motion.div
                  initial={{
                     opacity: 0,
                  }}
                  whileInView={{
                     opacity: 1,
                     transition: {
                        delay: 0.5,
                     },
                  }}
                  viewport={{ once: true }}
                  className="max-w-[1274px] w-full h-[700px] absolute z-[-1] top-20 left-0"
               >
                  <Image
                     className="w-full h-full opacity-5"
                     priority
                     src={"/images/grid.png"}
                     width={1000}
                     height={1000}
                     alt="grid"
                  />
               </motion.div>
               <div className="relative">
                  <motion.h1
                     initial={{
                        opacity: 0,
                        x: -100,
                     }}
                     whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.1,
                           type: "spring",
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}
                     className="text-9xl max-2xl:text-8xl max-lg:text-7xl max-md:text-[113px] max-sm:text-[100px] max-md:text-center leading-[84px] font-black text-white"
                  >
                     SMD 1.0
                  </motion.h1>
                  <motion.h2
                     initial={{
                        opacity: 0,
                        x: -100,
                     }}
                     whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.2,
                           type: "spring",
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}
                     className="text-[38px] max-2xl:text-[32px] max-xl:text-[28px] max-lg:text-[22px] max-md:text-[21px] max-md:text-center font-semibold leading-[84px] max-md:leading-[37.5px] text-white"
                  >
                     GRAFUZ • SOHIB ABDURAMON
                  </motion.h2>
                  <motion.div
                     initial={{
                        opacity: 0,
                        x: -100,
                     }}
                     whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.3,
                           type: "spring",
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}
                     className="max-md:block hidden"
                  >
                     <Image
                        src={"/images/avatar.svg"}
                        width={1000}
                        height={1000}
                        alt="avatar"
                     />
                  </motion.div>
                  <motion.button
                     initial={{
                        opacity: 0,
                        x: -100,
                     }}
                     whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.4,
                           type: "spring",
                           stiffness: 100,
                        },
                     }}
                     viewport={{ once: true }}

                     className="max-md:mt-4 max-sm:w-full py-1 px-8 text-[25px] max-lg:text-  [20px] rounded-[20px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
                  >
                     BEPUL SINAB KOʻRISH
                  </motion.button>
               </div>
            </div>
            <div className="w-2/5 max-md:hidden">
               <motion.div
                  initial={{
                     opacity: 0,
                     x: 100,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                        delay: 0.1,
                        type: "spring",
                        stiffness: 100,
                     },
                  }}
                  viewport={{ once: true }}
                  className="custom-select-none"
               >
                  <Image
                     className=""
                     src={"/images/avatar.svg"}
                     width={1000}
                     height={1000}
                     alt="avatar"
                  />
               </motion.div>
            </div>
         </div>
         <div className="custom-container">
            <ul className="flex flex-wrap items-center justify-between max-md:justify-center gap-10 max-md:gap-5 mt-20 max-md:mt-14 pl-10">
               <motion.li
                  initial={{
                     opacity: 0,
                     y: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                     transition: {
                        delay: 0,
                        type: "spring",
                        stiffness: 100,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2  text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
               >
                  <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="206"
                        height="216"
                        viewBox="0 0 206 216"
                        fill="none"
                     >
                        <path
                           d="M116.985 105.626L105.285 89.7854C104.555 88.7964 103.399 88.2148 102.165 88.2148L91.8772 88.2148C88.7067 88.2148 86.8803 91.8016 88.7579 94.3441L98.7773 107.906L88.7579 121.468C86.8803 124.01 88.7067 127.597 91.8772 127.597L102.165 127.597C103.399 127.597 104.555 127.015 105.285 126.026L116.985 110.185C117.988 108.827 117.988 106.981 116.985 105.626Z"
                           fill="url(#paint1_linear_0_196)"
                        />
                        <defs>
                           <linearGradient
                              id="paint1_linear_0_196"
                              x1="87.0041"
                              y1="108.343"
                              x2="117.16"
                              y2="107.009"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stopColor="#4773F8" />
                              <stop offset="1" stopColor="#0000B8" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span className="p-[15px] absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M7.50003 4.5C7.50003 3.67157 8.17161 3 9.00003 3C9.5648 3 10.0567 3.31212 10.3125 3.77327L7.50003 6.58579V4.5ZM12.3283 3.41405C11.8714 2.01266 10.554 1 9.00003 1C7.06704 1 5.50003 2.567 5.50003 4.5V8.5C5.50003 8.52776 5.50117 8.55525 5.50338 8.58244L2.41425 11.6716C0.852151 13.2337 0.852152 15.7663 2.41425 17.3284L6.67161 21.5858C8.2337 23.1479 10.7664 23.1479 12.3285 21.5858L16.8462 17.0681C16.4024 19.0218 17.8788 21 20 21C22.3624 21 23.9251 18.5463 22.9261 16.4055L20.916 12.0981C20.876 12.0069 20.8217 11.9204 20.7532 11.8421C20.7368 11.8233 20.7197 11.8051 20.7019 11.7877L12.3283 3.41405ZM10.5 12V6.41421L3.82846 13.0858C3.04741 13.8668 3.04741 15.1332 3.82846 15.9142L8.08582 20.1716C8.86687 20.9526 10.1332 20.9526 10.9142 20.1716L18.5858 12.5L12.5 6.41421V12C12.5 12.5523 12.0523 13 11.5 13C10.9478 13 10.5 12.5523 10.5 12ZM21.1138 17.2512C21.494 18.0661 20.8992 19 20 19C19.1009 19 18.5061 18.0661 18.8863 17.2512L20 14.8647L21.1138 17.2512Z"
                           fill="white"
                        />
                     </svg>
                  </span>
                  DIZAYN
               </motion.li>
               <motion.li
                  initial={{
                     opacity: 0,
                     y: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                     transition: {
                        delay: 0.1,
                        type: "spring",
                        stiffness: 100,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
               >
                  <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="206"
                        height="216"
                        viewBox="0 0 206 216"
                        fill="none"
                     >
                        <path
                           d="M116.985 105.626L105.285 89.7854C104.555 88.7964 103.399 88.2148 102.165 88.2148L91.8772 88.2148C88.7067 88.2148 86.8803 91.8016 88.7579 94.3441L98.7773 107.906L88.7579 121.468C86.8803 124.01 88.7067 127.597 91.8772 127.597L102.165 127.597C103.399 127.597 104.555 127.015 105.285 126.026L116.985 110.185C117.988 108.827 117.988 106.981 116.985 105.626Z"
                           fill="url(#paint1_linear_0_196)"
                        />
                        <defs>
                           <linearGradient
                              id="paint1_linear_0_196"
                              x1="87.0041"
                              y1="108.343"
                              x2="117.16"
                              y2="107.009"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stopColor="#4773F8" />
                              <stop offset="1" stopColor="#0000B8" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span className="p-[15px] absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M7.50003 4.5C7.50003 3.67157 8.17161 3 9.00003 3C9.5648 3 10.0567 3.31212 10.3125 3.77327L7.50003 6.58579V4.5ZM12.3283 3.41405C11.8714 2.01266 10.554 1 9.00003 1C7.06704 1 5.50003 2.567 5.50003 4.5V8.5C5.50003 8.52776 5.50117 8.55525 5.50338 8.58244L2.41425 11.6716C0.852151 13.2337 0.852152 15.7663 2.41425 17.3284L6.67161 21.5858C8.2337 23.1479 10.7664 23.1479 12.3285 21.5858L16.8462 17.0681C16.4024 19.0218 17.8788 21 20 21C22.3624 21 23.9251 18.5463 22.9261 16.4055L20.916 12.0981C20.876 12.0069 20.8217 11.9204 20.7532 11.8421C20.7368 11.8233 20.7197 11.8051 20.7019 11.7877L12.3283 3.41405ZM10.5 12V6.41421L3.82846 13.0858C3.04741 13.8668 3.04741 15.1332 3.82846 15.9142L8.08582 20.1716C8.86687 20.9526 10.1332 20.9526 10.9142 20.1716L18.5858 12.5L12.5 6.41421V12C12.5 12.5523 12.0523 13 11.5 13C10.9478 13 10.5 12.5523 10.5 12ZM21.1138 17.2512C21.494 18.0661 20.8992 19 20 19C19.1009 19 18.5061 18.0661 18.8863 17.2512L20 14.8647L21.1138 17.2512Z"
                           fill="white"
                        />
                     </svg>
                  </span>
                  ANIMATSIYA
               </motion.li>
               <motion.li
                  initial={{
                     opacity: 0,
                     y: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                     transition: {
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
               >
                  <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="206"
                        height="216"
                        viewBox="0 0 206 216"
                        fill="none"
                     >
                        <path
                           d="M116.985 105.626L105.285 89.7854C104.555 88.7964 103.399 88.2148 102.165 88.2148L91.8772 88.2148C88.7067 88.2148 86.8803 91.8016 88.7579 94.3441L98.7773 107.906L88.7579 121.468C86.8803 124.01 88.7067 127.597 91.8772 127.597L102.165 127.597C103.399 127.597 104.555 127.015 105.285 126.026L116.985 110.185C117.988 108.827 117.988 106.981 116.985 105.626Z"
                           fill="url(#paint1_linear_0_196)"
                        />
                        <defs>
                           <linearGradient
                              id="paint1_linear_0_196"
                              x1="87.0041"
                              y1="108.343"
                              x2="117.16"
                              y2="107.009"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stopColor="#4773F8" />
                              <stop offset="1" stopColor="#0000B8" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span className="p-[15px] absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M7.50003 4.5C7.50003 3.67157 8.17161 3 9.00003 3C9.5648 3 10.0567 3.31212 10.3125 3.77327L7.50003 6.58579V4.5ZM12.3283 3.41405C11.8714 2.01266 10.554 1 9.00003 1C7.06704 1 5.50003 2.567 5.50003 4.5V8.5C5.50003 8.52776 5.50117 8.55525 5.50338 8.58244L2.41425 11.6716C0.852151 13.2337 0.852152 15.7663 2.41425 17.3284L6.67161 21.5858C8.2337 23.1479 10.7664 23.1479 12.3285 21.5858L16.8462 17.0681C16.4024 19.0218 17.8788 21 20 21C22.3624 21 23.9251 18.5463 22.9261 16.4055L20.916 12.0981C20.876 12.0069 20.8217 11.9204 20.7532 11.8421C20.7368 11.8233 20.7197 11.8051 20.7019 11.7877L12.3283 3.41405ZM10.5 12V6.41421L3.82846 13.0858C3.04741 13.8668 3.04741 15.1332 3.82846 15.9142L8.08582 20.1716C8.86687 20.9526 10.1332 20.9526 10.9142 20.1716L18.5858 12.5L12.5 6.41421V12C12.5 12.5523 12.0523 13 11.5 13C10.9478 13 10.5 12.5523 10.5 12ZM21.1138 17.2512C21.494 18.0661 20.8992 19 20 19C19.1009 19 18.5061 18.0661 18.8863 17.2512L20 14.8647L21.1138 17.2512Z"
                           fill="white"
                        />
                     </svg>
                  </span>
                  MONTAJ
               </motion.li>
               <motion.li
                  initial={{
                     opacity: 0,
                     y: 50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                     transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white"
               >
                  <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="206"
                        height="216"
                        viewBox="0 0 206 216"
                        fill="none"
                     >
                        <path
                           d="M116.985 105.626L105.285 89.7854C104.555 88.7964 103.399 88.2148 102.165 88.2148L91.8772 88.2148C88.7067 88.2148 86.8803 91.8016 88.7579 94.3441L98.7773 107.906L88.7579 121.468C86.8803 124.01 88.7067 127.597 91.8772 127.597L102.165 127.597C103.399 127.597 104.555 127.015 105.285 126.026L116.985 110.185C117.988 108.827 117.988 106.981 116.985 105.626Z"
                           fill="url(#paint1_linear_0_196)"
                        />
                        <defs>
                           <linearGradient
                              id="paint1_linear_0_196"
                              x1="87.0041"
                              y1="108.343"
                              x2="117.16"
                              y2="107.009"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stopColor="#4773F8" />
                              <stop offset="1" stopColor="#0000B8" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span className="p-[15px] absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M7.50003 4.5C7.50003 3.67157 8.17161 3 9.00003 3C9.5648 3 10.0567 3.31212 10.3125 3.77327L7.50003 6.58579V4.5ZM12.3283 3.41405C11.8714 2.01266 10.554 1 9.00003 1C7.06704 1 5.50003 2.567 5.50003 4.5V8.5C5.50003 8.52776 5.50117 8.55525 5.50338 8.58244L2.41425 11.6716C0.852151 13.2337 0.852152 15.7663 2.41425 17.3284L6.67161 21.5858C8.2337 23.1479 10.7664 23.1479 12.3285 21.5858L16.8462 17.0681C16.4024 19.0218 17.8788 21 20 21C22.3624 21 23.9251 18.5463 22.9261 16.4055L20.916 12.0981C20.876 12.0069 20.8217 11.9204 20.7532 11.8421C20.7368 11.8233 20.7197 11.8051 20.7019 11.7877L12.3283 3.41405ZM10.5 12V6.41421L3.82846 13.0858C3.04741 13.8668 3.04741 15.1332 3.82846 15.9142L8.08582 20.1716C8.86687 20.9526 10.1332 20.9526 10.9142 20.1716L18.5858 12.5L12.5 6.41421V12C12.5 12.5523 12.0523 13 11.5 13C10.9478 13 10.5 12.5523 10.5 12ZM21.1138 17.2512C21.494 18.0661 20.8992 19 20 19C19.1009 19 18.5061 18.0661 18.8863 17.2512L20 14.8647L21.1138 17.2512Z"
                           fill="white"
                        />
                     </svg>
                  </span>
                  VFX
               </motion.li>
            </ul>
         </div>
      </>
   );
};

export default Hero;
