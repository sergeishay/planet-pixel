import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex flex-row justify-center gap-x-5 xl:gap-x-5 text-2xl items-center">
      <Link href={""} className="hover:text-lightBlue">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-lightBlue">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-lightBlue">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-lightBlue z-20">
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
