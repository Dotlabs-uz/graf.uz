import Image from "next/image";

import { motion } from "framer-motion";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="mb-10 max-md:mb-5">
         <div className="header">
            <nav>
               <ul className="header-ul">
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text"
                  >
                     #design
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.1,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text max-md:hidden"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.2,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text"
                  >
                     #motion
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.3,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text max-md:hidden"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.4,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                  >
                     <Image
                        className="header-logo"
                        src={"/images/logo.png"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.3,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text max-md:hidden"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.2,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text"
                  >
                     #design
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0.1,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text max-md:hidden"
                  >
                     &bull;
                  </motion.li>
                  <motion.li
                     initial={{
                        opacity: 0,
                        y: -30,
                     }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                           delay: 0,
                           type: "spring",
                           stiffness: 50,
                        },
                     }}
                     className="header-text"
                  >
                     #design
                  </motion.li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
