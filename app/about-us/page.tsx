import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className=" min-h-screen  justify-center ">
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
      </div>
      <div className=" flex justify-center w-full h-full">
        <Image
          alt="Certificate"
          height={500}
          width={400}
          src="/certificate (1).jpg"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
