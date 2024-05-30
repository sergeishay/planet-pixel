import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="relative pt-9 w-full h-full bg-cover bg-heroPanda
      xl:bg-cover
      xl:bg-backgroundDescNewPande mix-blend-luminosity
      opacity-60
      bg-no-repeat bg-right xl:bg-right
      "
    >
      {/* <Image src={"/newPanda.jpg"}
      width={500}
      height={500}
      className="w-full h-full mix-blend-luminosity	z-10	pl-20"
      alt="panda" /> */}
    </div>
  );
};

export default Avatar;
