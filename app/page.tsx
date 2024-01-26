import Image from "next/image";
import { Gallery } from "./_components/gallery";
import { QForm } from "./_components/query-form";
import ClientGallery from "./_components/gallery/clients-gallery";
import AboutUs from "./_components/AboutUs/about-us";
import { cn } from "@/lib/utils";
// import './style.css'

export default function Home() {
  return (
    <div>
      <AboutUs />
      <div className={cn("  p-4 lg:ms-48 lg:me-48")}>
        <div className="flex justify-center mb-4">
          <p className=" items-center font-semibold justify-center text-lg">
            Elevate Your Pneumatic Systems with Vak Pneumatics: A Comprehensive
            Guide
          </p>
        </div>
        <p className="items-center mb-8">
          In the world of industrial automation, efficiency is key, and one name
          that stands out is VAK Pneumatics. Renowned for its cutting-edge
          solutions and state-of-the-art pneumatic systems, VAK Pneumatics has
          become a go-to choice for businesses seeking seamless automation
          processes. <br />
          <br /> <b>Understanding VAK Pneumatics</b>: <br />
          <br /> VAK Pneumatics specializes in crafting high-performance
          pneumatic components that play a pivotal role in various industries.
          From valves and cylinders to air preparation units, their product
          range is designed to optimize workflow and enhance overall
          productivity. <br />
          <br /> <b>Key Features of VAK Pneumatics Products</b>: <br />
          <br />
          Precision Engineering: VAK Pneumatics products are engineered with
          precision, ensuring reliable and consistent performance in diverse
          applications.
          <br />
          <br />
          Durable Construction: Built to withstand the rigors of industrial
          environments, VAK Pneumatics components boast durable construction,
          contributing to their longevity.
          <br />
          <br />
          Versatility: Whether it&apos;s manufacturing, automotive, or any other
          industry, VAK Pneumatics products offer versatility, adapting
          seamlessly to different operational needs.
          <br />
          <br /> <b>Benefits of Choosing VAK Pneumatics:</b>
          <br />
          <br />
          Increased Efficiency: By incorporating VAK Pneumatics solutions,
          businesses experience heightened operational efficiency, reducing
          downtime and optimizing processes.
          <br />
          <br />
          Cost-Effectiveness: VAK Pneumatics products are not only
          performance-driven but also cost-effective, providing a robust return
          on investment for businesses of all sizes.
          <br />
          <br />
          Reliability: The reliability of VAK Pneumatics components ensures a
          steady and consistent workflow, minimizing disruptions and enhancing
          overall system reliability.
          <br />
          <br />
          Applications Across Industries: VAK Pneumatics caters to a broad
          spectrum of industries, including manufacturing, packaging, and
          automotive. Their diverse product range addresses the unique needs of
          each sector, making them a preferred choice for many businesses.
          <br />
          <br />
          Conclusion: In the realm of pneumatics, VAK Pneumatics stands tall as
          a symbol of innovation and reliability. Their commitment to delivering
          top-notch solutions has earned them a reputable place in the
          industrial automation landscape. For businesses seeking to elevate
          their automation game, VAK Pneumatics emerges as a trusted partner,
          offering cutting-edge products that redefine efficiency.
          <br />
          <br />
          Explore the world of VAK Pneumatics today and revolutionize your
          industrial automation experience.
        </p>
        {/* <style jsx global>
        {`
        background-image: url("../../../public/Pasted image 6.png");
        `}
      </style> */}
      </div>
      <Gallery />

      <ClientGallery />
    </div>
  );
}
