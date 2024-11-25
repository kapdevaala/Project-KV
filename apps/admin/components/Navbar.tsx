import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="w-[100%] max-w-[1500px]  h-[80px] flex flex-row  sm:justify-start justify-evenly items-center  text-4xl  border-b-4 border-black mt-4">
      <div className="min-w-[100px] h-[100%] flex sm:justify-start justify-center items-center  text-xl mb-4">
        <Image
          src={logo}
          alt="logo"
          className="h-[100%] w-[100%] cursor-pointer"
        />
      </div>
    </div>
  );
};
