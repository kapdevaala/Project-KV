import Dashboard from "@/components/Dashboard";
import { Counter } from "@/components/Counter";

export default function DashBoard() {
  return (
    <div className="flex items-center  flex-col min-h-[100vh] max-win-[100vw] w-[100%] border-2 border-yellow-950 bg-[#DEC1F5]">
      <Dashboard />
      <Counter />
    </div>
  );
}
