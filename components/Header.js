import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex item-center p-2  xl:p-6 xl:px-0 h-[60px] xl:h-[80px] ">
      <div className="w-full mx-[7%]">
        <div className="flex flex-col pt-2  lg:flex-row justify-start  xl:justify-between gap-0 xl:items-center">
          <Link href={"/"}>
            <Image src={"logo.svg"} width="320" height="100" alt="logo pixel planet" />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
