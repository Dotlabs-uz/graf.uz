import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Moduls from "@/containers/Moduls";
import Footer from "@/components/Footer";
import PriceCourses from "@/containers/PriceCourses";
import Course from "@/containers/Course";
import Mentor from "@/containers/Mentor";
import SwiperContainer from "@/containers/SwiperContainer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [stop, setStop] = useState(false);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {
      const date = new Date("12/31/2023 00:00:00");

      const interval = setInterval(() => {
         const now = new Date();
         const difference = date.getTime() - now.getTime();

         const d = Math.floor(difference / (1000 * 60 * 60 * 24));
         setDays(d);

         const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         setHours(h);

         const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
         setMinutes(m);

         const s = Math.floor((difference % (1000 * 60)) / 1000);
         setSeconds(s);

         if (d === -1 && h === -1 && m === -1 && s === -1) {
            setStop(true);
         }
      }, 1000);
   });

   return (
      <>
         <main className="overflow-hidden">
            <Header />
            <section className="">
               <Hero />
            </section>

            <section>
               <Moduls />
            </section>

            <section>
               <Mentor />
            </section>

            <section className="overflow-hidden">
               <SwiperContainer />
            </section>

            <section>
               <Course />
            </section>

            <section>
               <PriceCourses />
            </section>

            <section>
               <div className="w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
               <div className="bg-gradient-to-r from-[#18234A] from-1.3% to-[#0B0414] to-90.92% py-20">
                  <div className="custom-container flex max-lg:flex-col items-center justify-between ">
                     <motion.div
                        initial={{
                           x: -50,
                           opacity: 0,
                        }}
                        whileInView={{
                           x: 0,
                           opacity: 1,

                           transition: {
                              type: "spring",
                              stiffness: 60,
                           },
                        }}
                        viewport={{ once: true }}
                        className=""
                     >
                        <div className="">
                           <h3 className="mb-3 text-[30px] max-xl:text-[24px] font-medium leading-[41px] max-lg:text-center text-white">
                              Kurs boshlanish vaqti:
                           </h3>
                           <div className="flex items-center max-lg:justify-center gap-3">
                              <div className="">
                                 <div className="bg-[#d9d9d947] pt-8 pb-6 max-lg:pt-3 max-lg:pb-2 px-2 rounded-t-[10px]">
                                    <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                                       {stop ? "00" : days}
                                    </p>
                                 </div>
                                 <div className="bg-[#d9d9d947] rounded-b-[10px] mt-[2px]">
                                    <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                                       kun
                                    </p>
                                 </div>
                              </div>
                              <div className="">
                                 <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                                    :
                                 </p>
                              </div>
                              <div className="">
                                 <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                                    <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                                       {stop ? "00" : hours}
                                    </p>
                                 </div>
                                 <div className="rounded-b-[10px] mt-[2px]">
                                    <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                                       soat
                                    </p>
                                 </div>
                              </div>
                              <div className="">
                                 <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                                    :
                                 </p>
                              </div>
                              <div className="">
                                 <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                                    <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                                       {stop ? "00" : minutes}
                                    </p>
                                 </div>
                                 <div className="rounded-b-[10px] mt-[2px]">
                                    <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                                       daqiqa
                                    </p>
                                 </div>
                              </div>
                              <div className="">
                                 <p className="text-[73px] max-lg:text-[60px] max-md:text-[50px] font-medium leading-[41px] mt-5 max-xl:mt-0 text-white">
                                    :
                                 </p>
                              </div>
                              <div className="">
                                 <div className="pt-8 pb-6 px-2 max-lg:pt-3 max-lg:pb-2 rounded-t-[10px]">
                                    <p className="text-[96px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] font-bold leading-[41px] text-center text-white">
                                       {stop ? "00" : seconds}
                                    </p>
                                 </div>
                                 <div className="rounded-b-[10px] mt-[2px]">
                                    <p className="text-lg max-lg:text-[16px] max-sm:text-[10px] font-medium leading-[41px] max-lg:leading-[30px] text-center text-white">
                                       soniya
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mt-12 text-[43px] max-2xl:text-[28px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] font-bold leading-[41px] max-xl:leading-[25px] max-md:leading-[15px] max-sm:text-center text-white">
                           <p className="mb-5">
                              O’zingizni sinab ko’rish uchun
                           </p>
                           <p className="">
                              <span className="pl-5 pr-7 max-xl:pr-5 max-sm:pr-3 max-xl:pl-3 max-sm:pl-2 mr-2 rounded-2xl bg-gradient-to-r from-[#844FFC] from-13.57% to-[#491EB8] to-98.35%">
                                 bepul
                              </span>
                              darsni qo’lga kiriting
                           </p>
                        </div>
                     </motion.div>

                     <motion.div
                        initial={{
                           x: 50,
                           opacity: 0,
                        }}
                        whileInView={{
                           x: 0,
                           opacity: 1,

                           transition: {
                              type: "spring",
                              stiffness: 60,
                           },
                        }}
                        viewport={{ once: true }}
                        className="relative max-lg:mt-20 max-w-xl max-xl:max-w-lg max-lg:max-w-full w-full pt-8 pb-12 max-md:pb-8 max-sm:pb-5 px-9 max-lg:px-5 max-sm:px-3 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]"
                     >
                        <div className="w-48 max-sm:w-32 absolute -top-20 -left-20 max-lg:-left-16 max-sm:-top-16 max-sm:-left-12">
                           <Image
                              src={"/images/fire.png"}
                              width={1000}
                              height={1000}
                              alt="fire"
                           />
                        </div>
                        <div className="">
                           <h3 className="text-[34px] font-bold leading-[41px] tracking-[0.374px] text-center text-white">
                              Ariza qoldiring
                           </h3>
                           <p className="font-medium leading-[41px] tracking-[0.374px] text-center text-white">
                              va bepul darsni qo’lga kiriting
                           </p>
                        </div>
                        <form className="w-full flex flex-col gap-4 max-lg:gap-3 max-sm:gap-2">
                           <input
                              type="text"
                              placeholder="Ism familyangiz"
                              className="inp w-full py-3 px-7 max-lg:px-5 text-2xl max-lg:text-xl max-sm:text-lg font-medium leading-[41px] rounded-xl text-[#ffffff54]"
                           />
                           <input
                              type="text"
                              placeholder="+998 (99) 999-99-99"
                              className="inp w-full py-3 px-7 max-lg:px-5 text-2xl max-lg:text-xl max-sm:text-lg font-medium leading-[41px] rounded-xl text-[#ffffff54]"
                           />
                           <button className="py-3 max-md:py-0 text-2xl leading-[41px] font-bold rounded-xl bg-gradient-to-r from-[#cc00ff7d] from-[10.42%] to-[#074dff80] to-[77.11%] text-white">
                              Yuborish
                           </button>
                        </form>
                        <div className="mt-2">
                           <p className="max-lg:text-xs max-sm:text-[10px] max-sm:leading-[13px] text-center text-white">
                              Tugmani bosish orqali siz bizga
                              <span className="underline underline-offset-2">
                                 shaxsiy malumotlar
                              </span>
                              ingizni qayta ishlashga ruxsat berasiz va
                              <span className="underline underline-offset-2">
                                 taklif shartlari
                              </span>
                              ga rozilik bildirasiz.
                           </p>
                        </div>
                     </motion.div>
                  </div>
               </div>
               <div className="mb-7 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
            </section>
         </main>
         <Footer />
      </>
   );
}
