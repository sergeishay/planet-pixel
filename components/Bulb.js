import Image from "next/image";


const Bulb = () => {
  return <div>
    <Image src={'/bulb.png'} width={100} height={100} alt="bulb" />
  </div>;
};

export default Bulb;
