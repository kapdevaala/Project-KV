import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="w-[100%] max-w-[1500px] border-2 border-red-800 h-[80px] flex flex-row justify-evenly items-center  text-4xl mt-4">
      <div className="min-w-[100px] h-[100%] flex sm:justify-start justify-center items-center border-black border-2 text-xl">
        <Image src={logo} alt="logo" className="h-[100%] w-[100%] cursor-pointer" />
      </div>
      <div className="h-[100%]  sm:hidden flex justify-center items-center">
        <BsLayoutTextSidebarReverse />
      </div>
      <div className="hidden sm:flex justify-evenly items-center w-[200px] h-[100%] border-2 border-black ">
        <span>
          <BsCart2 />
        </span>
        <span>
          <CgProfile />
        </span>
      </div>
    </div>
  );
};
