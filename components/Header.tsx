import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="mb-10 max-md:mb-5">
         <div className="header">
            <nav>
               <ul className="header-ul">
                  <li className="header-text">#design</li>
                  <li className="header-text max-md:hidden">&bull;</li>
                  <li className="header-text">#motion</li>
                  <li className="header-text max-md:hidden">&bull;</li>
                  <li>
                     <Image
                        className="header-logo"
                        src={"/images/logo.png"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </li>
                  <li className="header-text max-md:hidden">&bull;</li>
                  <li className="header-text">#design</li>
                  <li className="header-text max-md:hidden">&bull;</li>
                  <li className="header-text">#design</li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
