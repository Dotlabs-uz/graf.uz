import { useState, useEffect } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Footer from "@/components/Footer";
import PriceCourses from "@/containers/PriceCourses";
import Course from "@/containers/Course";
import Mentor from "@/containers/Mentor";
import Range from "@/components/children/Range";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [active, setActive] = useState(1);

   const [stop, setStop] = useState(false);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   // useEffect(() => {
   //    const date = new Date("12/31/2023 00:00:00");

   //    const interval = setInterval(() => {
   //       const now = new Date();
   //       const difference = date.getTime() - now.getTime();

   //       const d = Math.floor(difference / (1000 * 60 * 60 * 24));
   //       setDays(d);

   //       const h = Math.floor(
   //          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   //       );
   //       setHours(h);

   //       const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   //       setMinutes(m);

   //       const s = Math.floor((difference % (1000 * 60)) / 1000);
   //       setSeconds(s);

   //       if (d === -1 && h === -1 && m === -1 && s === -1) {
   //          setStop(true);
   //       }
   //    }, 1000);
   // });

   const arr = [
      {
         id: 0,
         title: "Adobe Photoshop dasturiga kirish 1",
      },
      {
         id: 1,
         title: "Adobe Premiere Pro dasturiga kirish 2",
      },
      {
         id: 2,
         title: "Adobe After Effects dasturiga kirish 3",
      },
      {
         id: 3,
         title: "Adobe Audition dasturiga kirish 4",
      },
      {
         id: 4,
         title: "Mocha PRO dasturiga kirish 5",
      },
      {
         id: 5,
         title: "Lorem ipsum dolor sit. 6",
      },
      {
         id: 6,
         title: "Lorem ipsum dolor sit amet. 7",
      },
      {
         id: 7,
         title: "Lorem ipsum dolor. 8",
      },
      {
         id: 8,
         title: "Lorem ipsum dolor sit, amet. 9",
      },
      {
         id: 9,
         title: "Adobe Photoshop dasturiga kirish 10",
      },
   ];

   return (
      <>
         <Header />
         <section>
            <Hero />
         </section>

         <section>
            <div className="custom-container">
               <div className="flex justify-center my-10">
                  <div className="relative border border-white px-7 py-1">
                     <span className="absolute -top-2 -left-2 max-sm:-top-1 max-sm:-left-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <span className="absolute -top-2 -right-2 max-sm:-top-1 max-sm:-right-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <span className="absolute -top-2 left-1/2 max-sm:-top-1 w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <span className="absolute -bottom-2 -left-2 max-sm:-bottom-1 max-sm:-left-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <span className="absolute -bottom-2 left-1/2 max-sm:-bottom-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <span className="absolute -bottom-2 -right-2 max-sm:-bottom-1 max-sm:-right-1 max-sm: w-fit block p-2 max-sm:p-1 bg-[#0B0414] border border-white"></span>
                     <h2 className="text-[53px] max-lg:text-[44px] max-sm:text-[32px] font-bold text-white">
                        Kurs dasturi
                     </h2>
                  </div>
               </div>

               <div className="mb-10">
                  <div className="mb-10">
                     <Range active={active} setActive={setActive} />
                  </div>

                  <div className="rounded-[10px] border-2 overflow-hidden border-[#ffffff1a]">
                     <ul className="flex bg-[#00000029]">
                        <li className="flex items-center gap-2 py-3 px-10 border-b-2 border-[#ffffff1a]">
                           <p className="w-3 h-3 rounded-full border-2 border-[#ffffff1a]"></p>
                           <p className="w-3 h-3 rounded-full border-2 border-[#ffffff1a]"></p>
                           <p className="w-3 h-3 rounded-full border-2 border-[#ffffff1a]"></p>
                        </li>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => {
                           return (
                              <li
                                 onClick={() => setActive(item + 1)}
                                 key={item}
                                 className={`w-full flex items-center justify-center text-[14px] cursor-pointer ${
                                    active === item + 1
                                       ? "border-x-2 border-[#ffffff1a] text-[#fff] bg-[#ffffff0f]"
                                       : "border-b-2 border-[#ffffff1a] text-[#ffffff33]"
                                 }`}
                              >
                                 <button>MODUL #{item + 1}</button>
                              </li>
                           );
                        })}
                     </ul>
                     {arr.map((item: any) => {
                        if (active === item.id + 1) {
                           return (
                              <div
                                 key={item.id}
                                 className="flex justify-between py-6 px-20 gradient"
                              >
                                 <div className="w-1/2">
                                    <div className="">
                                       <p className="font-medium text-white">
                                          SMD | Modul #{active}
                                       </p>
                                       <h3 className="text-[31px] text-white">
                                          {item.title}
                                       </h3>
                                    </div>
                                    <div className="">
                                       <ul className="flex flex-col max-md:justify-center gap-5 mt-5 pl-10">
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                1
                                             </span>
                                             Interfeys va instrumentlar
                                          </li>
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                2
                                             </span>
                                             Sloylar bilan ishlash
                                          </li>
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                3
                                             </span>
                                             Blending Options
                                          </li>
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                4
                                             </span>
                                             Peen Tool / Bézier Game
                                          </li>
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                5
                                             </span>
                                             Belgilash va kesish texnikasi,
                                             Maska{" "}
                                          </li>
                                          <li className="w-fit max-md:w-full max-md:text-center relative px-14 max-xl:px-10 py-2 text-[25px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
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
                                                         <stop
                                                            offset="1"
                                                            stopColor="#0000B8"
                                                         />
                                                      </linearGradient>
                                                   </defs>
                                                </svg>
                                             </span>
                                             <span className="w-[55px] h-[55px] flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                                                6
                                             </span>
                                             Cleanup, Retush
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="w-2/5">
                                    <div className="w-full h-full bg-gray-600">
                                       qwf
                                    </div>
                                 </div>
                              </div>
                           );
                        }
                     })}
                  </div>
               </div>
            </div>
         </section>
         <section>
            <Mentor />
         </section>
         <section className="overflow-hidden">
            <div className="custom-container pb-96">
               <div className="mb-16">
                  <h2 className="text-[78px] max-md:text-[50px] max-sm:text-[30px] font-bold text-center text-white">
                     BITIRUVCHILAR MAHORATI
                  </h2>
               </div>

               <div className="max-lg:hidden mb-16 flex items-center justify-between">
                  <div className="flex flex-col gap-4">
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           After effects
                        </p>
                     </div>
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           Photoshop
                        </p>
                     </div>
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           Premiere Pro
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4">
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           Design
                        </p>
                     </div>
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           Editing
                        </p>
                     </div>
                     <div className="w-fit py-1 px-8 rounded-3xl border border-white">
                        <p className="text-[28px] leading-[42px] text-white">
                           Sound
                        </p>
                     </div>
                  </div>
               </div>

               <div className="relative ">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[41%] max-lg:-translate-y-[360px] max-md:-translate-y-[360px] max-sm:-translate-y-[300px] w-[534px] max-xl:w-[460px] max-sm:w-[380px]">
                     <Image
                        src={"/images/phone.svg"}
                        width={1000}
                        height={1000}
                        alt="phone"
                     />
                  </div>
                  <Swiper
                     className="mt-40"
                     spaceBetween={20}
                     slidesPerView={4}
                     breakpoints={{
                        0: {
                           slidesPerView: 1,
                           spaceBetween: 15,
                        },
                        640: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                        },
                        1024: {
                           slidesPerView: 3,
                        },
                        1280: {
                           slidesPerView: 4,
                        },
                     }}
                  >
                     {[0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => {
                        return (
                           <SwiperSlide
                              className="flex justify-center"
                              key={item}
                           >
                              <div className="w-full h-[451px] max-xl:h-[390px] max-sm:h-[300px] rounded-[48px] shadow-[0px_10px_20px_#0094ff9c] bg-[#2f1c58] hover:-translate-y-3 duration-200 ease-in-out"></div>
                           </SwiperSlide>
                        );
                     })}
                  </Swiper>
               </div>
            </div>
         </section>
         <section>
            <Course />
         </section>
         <section>
            <PriceCourses />
         </section>
         <section>
            <div className="mt-28 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
            <div className="bg-gradient-to-r from-[#18234A] from-1.3% to-[#0B0414] to-90.92% py-20">
               <div className="custom-container flex max-lg:flex-col items-center justify-between ">
                  <div className="">
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
                        <p className="mb-5">O’zingizni sinab ko’rish uchun</p>
                        <p className="">
                           <span className="pl-5 pr-7 max-xl:pr-5 max-sm:pr-3 max-xl:pl-3 max-sm:pl-2 mr-2 rounded-2xl bg-gradient-to-r from-[#844FFC] from-13.57% to-[#491EB8] to-98.35%">
                              bepul
                           </span>
                           darsni qo’lga kiriting
                        </p>
                     </div>
                  </div>

                  <div className="relative max-lg:mt-20 max-w-xl max-xl:max-w-lg max-lg:max-w-full w-full pt-8 pb-12 max-md:pb-8 max-sm:pb-5 px-9 max-lg:px-5 max-sm:px-3 rounded-[30px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
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
                  </div>
               </div>
            </div>
            <div className="mb-7 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
         </section>
         <Footer />
      </>
   );
}
