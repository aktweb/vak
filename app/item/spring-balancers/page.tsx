import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className=" flex-col space-y-10">
      <div className=" flex justify-center font-semibold text-xl">
        Spring Balancers & Hose Reels
      </div>

      <div className=" p-2 font-bold text-2xl">1. Spring Balancer</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/springb.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Efficiency:</p>
          <span className=" text-l">
            Fatigue less works and impreoved production efficiency
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Capacity:</p>
          <span className=" text-l">
            Available in capacities ranging from as low as 0.5Kg up to maximum
            120Kg capacity
          </span>
          <p className=" font-semibold text-xl mt-2">iii. Spring Breakage:</p>
          <span className=" text-l">
            The fall arrest device in provide against tool cause by spring
            breakage
          </span>
          <p className=" font-semibold text-xl mt-2">iv. Support Hanger:</p>
          <span className=" text-l">
            Secondary support hanger is available on every model
          </span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* ---------- */}

      <div className=" p-2 font-bold text-2xl">
        2. Hose Reels - Air / Water / Oil
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/1.-Hose-Reels.jpg`}
          height={850}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2">i. Device:</p>
          <span className=" text-l">
            An included spring works to retract a hose into device automatically
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Diameter:</p>
          <span className=" text-l">
            A contained hose solves the short of air consumption for air tool
            owing to a large inner diameter.
          </span>
          <p className=" font-semibold text-xl mt-2">iii. Position:</p>
          <span className=" text-l">
            A ratchet system applied for the device can keep a tool suspended at
            any position on the hose travel wherever you want.
          </span>
          <p className=" font-semibold text-xl mt-2">iv. Available Body:</p>
          <span className=" text-l">
            Available in both closed body construction as well as open body.
          </span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      {/* ---------- */}
    </div>
  );
};

export default AirCylinders;
