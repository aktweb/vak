/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AboutUs = () => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter()
    function handleClick(){
      router.push(`/about-us`)
    }


  return (
    <div>
      <div
        className="flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className={cn(" w-full lg:w-2/3 ")} src="about-us.jpg" alt="Abput Us" />
        {isHovered && (
          <div className={cn("absolute top-[200px] lg:top-1/2 lg:justify-center lg:items-center    shadow-black  shadow-2xl")}>
            <Button className={cn("bg-[#fe9030] border-blue-500 lg:p-6 lg:text-xl hover:bg-[#c56a1a] ")} onClick={handleClick}>About Us</Button>
          </div>
        )}{" "}
      </div>
      <div className={cn(" m-2 lg:ms-52 lg:me-52")}>
        <p className="items-center mb-8">
          <b>VAK Pneumatic</b> is an ISO 9001:2008 certified company,
          established in the year 2002. We are professionally managed
          organization with the high quality of pneumatic products manufacturing
          and assembly. We are specialized in executions of engineering piping
          projects on a turnkey basis. We have well equipped in-house design and
          engineering team to handle in time customer commitment. We maintain a
          large warehouse to cater customer demand and ensure quick delivery.
        </p>
        <p>
          At VAK we take R&D as a vital and most important component of business
          strategy. Our R&D, located at Bangalore is fully equipped to
          synthesize new products to meet our customer&apos;s special needs. VAK
          has well established marketing network in all over INDIA with
          residential engineers and branch office in major cities.
        </p>
        {/* <style jsx global>
        {`
        background-image: url("../../../public/Pasted image 6.png");
        `}
      </style> */}
      </div>
    </div>
  );
};

export default AboutUs;
