import Header from "@/components/Header";
import Button from "@/components/UI/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-marketplace bg-cover bg-center h-screen w-full relative">
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      <Header />
      <div className="flex flex-col justify-center items-center text-white h-96 relative">
        <h1 className="text-4xl pb-4 font-bold">
          Rediscover Value, Share Generously
        </h1>
        <p className="font-bold italic ">
          Transform unused items into opportunities for others. Join the
          Circular Economy Marketplace today!
        </p>
        <div className="mt-4">
          <Button className="relative">Get started</Button>
        </div>
      </div>
    </div>
  );
}
