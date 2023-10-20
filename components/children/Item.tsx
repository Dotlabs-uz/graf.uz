interface ItemProps {
   item: number;
}

const Item: React.FC<ItemProps> = ({ item }) => {
   return (
      <li className="w-fit max-md:w-full max-sm:w-fit max-md:text-center max-sm:text-start relative px-14 max-xl:px-10 max-lg:px-7 py-2 text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[12px] rounded-[10px] bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%] text-white">
         <span className="absolute z-50 top-1/2 -translate-y-1/2 -left-32 max-lg:-left-[100px]">
            <svg
               className="max-lg:w-40 h-fit"
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
         <span className="w-[55px] h-[55px] max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 flex items-center justify-center absolute z-50 top-1/2 -translate-y-1/2 -left-5 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#ffffff33] from-[10.42%] to-[#ffffff0a] to-[77.11%]">
            {item + 1}
         </span>
         <p>Interfeys va instrumentlar</p>
      </li>
   );
};

export default Item;