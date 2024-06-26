import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="relative pt-9 w-full h-full bg-cover bg-heroPanda
      xl:bg-cover
      xl:bg-backgroundDescNewPande mix-blend-screen
      opacity-100
      bg-no-repeat bg-right xl:bg-right
      "
    >
      <Image src={"/Ellipse.png"}
      width={300}
      height={300}
      className="relative top-0 right-0 w-full h-full -mr-10	z-10	"
      alt="panda" />
    </div>
  );
};

export default Avatar;
