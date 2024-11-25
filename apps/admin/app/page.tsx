import { Navbar } from "@/components/Navbar";
import { Signin } from "@/components/Signin";


export default function Home() {
  return (
    <div className="flex items-center  flex-col min-h-[100vh] max-win-[100vw] w-[100%] border-2 border-yellow-950 bg-[#DEC1F5]">
      <Navbar />
      <Signin />
    </div>
  );
}
