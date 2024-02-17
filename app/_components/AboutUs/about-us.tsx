/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  function handleClick() {
    router.push(`/about-us`);
  }

  return (
    <div>
      <div
        className="flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className={cn(" w-full lg:w-3/5 ")}
          src="about-us.jpg"
          alt="Abput Us"
        />
        {isHovered && (
          <div
            className={cn(
              "absolute top-[200px] lg:top-1/3 lg:justify-center lg:items-center    shadow-black  shadow-2xl"
            )}
          >
            <Button
              className={cn(
                "bg-[#fe9030] border-blue-500 lg:p-6 lg:text-xl hover:bg-[#c56a1a] "
              )}
              onClick={handleClick}
            >
              About Us
            </Button>
          </div>
        )}{" "}
      </div>
     
    </div>
  );
};

export default AboutUs;
