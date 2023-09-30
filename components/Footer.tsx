import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer>
         <div className="custom-container">
            <div className="flex items-start justify-between max-md:grid grid-cols-2">
               <div className="">
                  <h3 className="mb-5 max-sm:mb-4 text-2xl max-lg:text-xl max-sm:text-sm font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Kurs
                  </h3>
                  <ul>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Modullar</Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Kurs haqida</Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"}>Narxi</Link>
                     </li>
                  </ul>
               </div>
               <div className="max-md:hidden">
                  <h3 className="mb-5 text-2xl max-lg:text-xl font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Social
                  </h3>
                  <ul>
                     <li className="text-2xl max-lg:text-xl font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"} className="flex items-center gap-4 ">
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/Instagram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           Instagram
                        </Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"} className="flex items-center gap-4 ">
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/youtub.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           Youtube
                        </Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"} className="flex items-center gap-4 ">
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/tiktok.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           Tiktok
                        </Link>
                     </li>
                     <li className="text-2xl max-lg:text-xl font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link href={"#"} className="flex items-center gap-4 ">
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/telegram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           Telegram
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="">
                  <h3 className="mb-5 max-sm:mb-4 text-2xl max-lg:text-xl max-sm:text-sm font-light leading-[42px] tracking-[0.374px] text-[#ffffffab]">
                     Bog’lanish
                  </h3>
                  <ul>
                     <li className="m text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <a
                           href="tel:20 002-09-08"
                           className="flex items-center gap-4 max-md:gap-2 max-sm:gap-0"
                        >
                           <Image
                              className="w-14 max-md:w-10 max-sm:w-9 h-14 max-md:h-10 max-sm:h-9"
                              src={"/images/social/instagram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           20 002-09-08
                        </a>
                     </li>
                     <li className="text-2xl max-lg:text-xl max-sm:text-sm font-semibold leading-[42px] tracking-[0.374px] text-white">
                        <Link
                           href={"#"}
                           className="flex items-center gap-4 max-md:gap-2 max-sm:gap-0"
                        >
                           <Image
                              className="w-14 max-md:w-10 max-sm:w-9 h-14 max-md:h-10 max-sm:h-9"
                              src={"/images/social/telegram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                           telegram
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-span-3 max-md:block hidden mt-8">
                  <ul className="flex items-center justify-center gap-4">
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/Instagram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/youtub.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/tiktok.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                     <li className="">
                        <Link href={"#"}>
                           <Image
                              className="w-14 h-14"
                              src={"/images/social/telegram.png"}
                              width={1000}
                              height={1000}
                              alt="Instagram"
                           />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="flex max-lg:flex-col items-center justify-between mt-9">
               <div className="flex max-md:flex-col items-center gap-9 max-md:gap-5">
                  <div className="w-20 h-20">
                     <Image
                        src={"/images/logo-white.png"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div className="max-md:text-center">
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        2023 | Grafuz
                     </p>
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Materiallarni nusxalash taqiqlanadi.
                     </p>
                  </div>
                  <div className="max-md:text-center">
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Maxfiylik siyosati
                     </p>
                     <p className="max-sm:text-[10px] tracking-[0.374px] text-[#ffffff4d]">
                        Shartnoma
                     </p>
                  </div>
               </div>

               <div className="flex items-center max-lg:mt-3">
                  <Link href={"#"}>
                     <Image
                        className="w-24"
                        src={"/images/social/click.png"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
                  <Link href={"#"}>
                     <Image
                        className="w-24 ml-5 max-sm:ml-3"
                        src={"/images/social/payme.png"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
                  <Link href={"#"}>
                     <Image
                        className="w-40"
                        src={"/images/social/uzum.png"}
                        width={1000}
                        height={1000}
                        alt="click"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
