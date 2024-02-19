import { MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../navbar/logo";
import { NavContact } from "../navbar/nav-contact";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div className="bg-[#f48423] p-3 flex justify-between w-full items-center">
      <div className=" flex-col items-center justify-center">
        <Logo />
        {/* <div className={cn("lg:w-1/4 items-start justify-start ")}>
          <NavContact />
        </div> */}
        <p
          className={cn(
            " w-2/3 lg:text-[#3c3b41] lg:font-sans lg:w-1/3 lg:mt-3 lg:font-semibold lg:text-sm "
          )}
        >
          Address Details <br /> NO1 ,9th CROSS GANESH TEMPLE MAGADI ROAD 
          RAJAJINAGAR BANGALORE 560023 
          INDIA
        </p>
      </div>
    </div>
  );
};
