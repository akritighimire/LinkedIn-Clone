import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-white z-50">
        <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
          <div>
            <Image
            src={'/logo.png'} alt="img" width={50} height={50}></Image>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
