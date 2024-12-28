import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-marketplace bg-cover bg-center h-screen w-full relative">
      {/* <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div> */}
      <Header />
    </div>
  );
}
