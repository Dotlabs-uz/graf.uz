import Image from "next/image";

import { motion } from "framer-motion";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
   return (
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
   );
};

export default Form;