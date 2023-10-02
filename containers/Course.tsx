import Image from "next/image";

interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
   return (
      <>
         <div className="mt-28 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
         <div className="bg-gradient-to-r from-[#0B0414] from-1.3% to-[#18234A] to-90.92% py-40">
            <div className="custom-container flex items-center justify-between">
               <div className="w-1/2">
                  <div className="mb-8">
                     <h2 className="text-[72px] font-bold text-white">
                        Bu KURSDA
                     </h2>
                  </div>
                  <div className="mb-8">
                     <ul className="text-[37px] font-medium mb-8 text-white">
                        <li>Adobe Photoshop</li>
                        <li>Adobe Premiere Pro</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe Audition</li>
                        <li>Mocha PRO</li>
                     </ul>
                     <p className="text-[37px] font-medium text-white">
                        kabi dasturlarda SMM dizayn sohasida kerak bo’ladigan
                        barcha bilimga ega bo’lasiz.
                     </p>
                  </div>
                  <div className="">
                     <button className="flex items-center gap-3 py-3 px-6 text-[25px] font-bold leading-[41px] rounded-xl bg-gradient-to-tr from-[#cc00ff7d] from-[10.42%] to-[#074dff80] to-[77.11%] text-white">
                        Kurs INTROsini tomosha qilish
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="23"
                           height="27"
                           viewBox="0 0 23 27"
                           fill="none"
                        >
                           <path
                              d="M15.2049 5.3141C19.5488 8.09322 21.7208 9.48278 22.4363 11.2689C23.0099 12.701 23.0099 14.299 22.4363 15.7311C21.7208 17.5172 19.5488 18.9068 15.2049 21.6859C10.2309 24.8681 7.74386 26.4592 5.68776 26.2657C4.04425 26.111 2.53708 25.286 1.52107 23.9849C0.249999 22.3573 0.249999 19.4048 0.249999 13.5C0.249999 7.59516 0.249999 4.64274 1.52107 3.01506C2.53708 1.71399 4.04426 0.889004 5.68776 0.734317C7.74386 0.540798 10.2309 2.1319 15.2049 5.3141Z"
                              fill="#E0E0E0"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="relative z-10">
                  <Image
                     className="absolute z-[60] top-20 -right-5 w-16"
                     src={"/images/apps/cube.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <Image
                     className="absolute z-[60] -left-16 bottom-72 w-32"
                     src={"/images/apps/cube.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <Image
                     className="absolute -top-10 -left-48 z-[-20] w-64"
                     src={"/images/apps/photoshop.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <Image
                     className="absolute z-[60] -right-24 max-2xl:-right-16 max-xl:-right-8 top-80 w-40"
                     src={"/images/apps/premiere.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <Image
                     className="absolute -top-20 right-6 w-40"
                     src={"/images/apps/illustrator.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <Image
                     className="absolute z-[60] -left-32 bottom-52 w-44"
                     src={"/images/apps/aftereffects.svg"}
                     width={1000}
                     height={1000}
                     alt="iphone"
                  />
                  <div className="absolute z-[60] top-60 -left-24 w-fit py-5 px-10 text-[34px] font-bold rounded-[30px] border-2 border-[#ffffff80] text-white backdrop-blur-[35px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <p>Design</p>
                  </div>
                  <div className="absolute z-[60] top-40 -right-24 max-2xl:-right-16 max-xl:-right-8 w-fit py-5 px-10 text-[34px] font-bold rounded-[30px] border-2 border-[#ffffff80] text-white backdrop-blur-[35px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
                     <p>Trend</p>
                  </div>
                  <div className="relative z-50 w-96">
                     <Image
                        src={"/images/iphone.svg"}
                        width={1000}
                        height={1000}
                        alt="iphone"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="mb-28 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#364064]"></div>
      </>
   );
};

export default Course;
