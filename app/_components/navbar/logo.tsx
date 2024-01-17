import Link from "next/link";
import Image from "next/image";


export const Logo=()=>{
    return (
      <Link href="/">
        <div className="flex items-center  hover:opacity-90 transition">
          <div className=" bg-white rounded-full   p-3 shrink-0 lg:mr-0 lg:shrink">
            <Image src="/vak.jpeg" alt="logo" height="50" width="50" />
          </div>
          <div className="hidden lg:block">
            <p className="text-xl text-[#3c3b41] font-semibold">VAK</p>
            <p className="text-xs text-[#3c3b41] ">Pneumatic Components</p>
          </div>
        </div>
      </Link>
    );
}