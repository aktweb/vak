import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className=" flex-col space-y-10">
      <br/>
      <div className=" flex justify-center font-bold text-5xl text-slate-700 ml-4">
        Spring Balancers & Hose Reels
      </div>

      <div className=" p-2 font-semibold text-3xl ml-4">1. Spring Balancer</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/springb.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify ml-3">
          <p className="font-semibold text-2xl text-gray-500">Features</p>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Efficiency:</p>
          <span className=" text-l">
            Fatigue less works and impreoved production efficiency
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Capacity:</p>
          <span className=" text-l">
            Available in capacities ranging from as low as 0.5Kg up to maximum
            120Kg capacity
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Spring Breakage:</p>
          <span className=" text-l">
            The fall arrest device in provide against tool cause by spring
            breakage
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Support Hanger:</p>
          <span className=" text-l">
            Secondary support hanger is available on every model
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <br />

      {/* ---------- */}

      <div className=" p-2 font-semibold text-3xl ml-4">
        2. Hose Reels - Air / Water / Oil
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/1.-Hose-Reels.jpg`}
          height={850}
          width={350}
        ></Image>
        <div className=" text-justify ml-3">
          <p className="font-semibold text-2xl text-gray-500">Features</p>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Device:</p>
          <span className=" text-l">
            An included spring works to retract a hose into device automatically
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Diameter:</p>
          <span className=" text-l">
            A contained hose solves the short of air consumption for air tool
            owing to a large inner diameter.
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Position:</p>
          <span className=" text-l">
            A ratchet system applied for the device can keep a tool suspended at
            any position on the hose travel wherever you want.
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12"> Available Body:</p>
          <span className=" text-l">
            Available in both closed body construction as well as open body.
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      {/* ---------- */}
    </div>
  );
};

export default AirCylinders;
