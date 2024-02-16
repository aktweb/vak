import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className=" flex-col space-y-10">
      <br/>
      <div className=" flex justify-center font-bold text-5xl text-slate-700">
        Air Blow Gun & Air Silencers
      </div>

      <div className=" p-2 font-semibold text-4xl">
         <span> 1. Air Blow Gun & Tube Cutter</span>
         </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/airgun.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Body Type:</p>
          <span className=" text-l">
            Air Blow Gun available in plastic and aluminium body
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/tubecutter.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500">Features</p>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Body Type:</p>
          <span className=" text-l">
           Tube Cutter available in plastic body
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Range:</p>
          <span className=" text-l">
            Tube Cutter available for size ranging from 4mm to 16mm
          </span>
        </div>
      </div>
      {/* ---------- */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}
      <div className=" p-2 font-semibold text-4xl">2. Air Silencers</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/3. Air Silencers.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500">Features</p>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">
            G1/8, G1/4, G3/8, G1/2, G3/4, G1 and G2
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Type:</p>
          <span className=" text-l">
            Conicat, Button and Silencer cum flow control with lock nut
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Characteristics:</p>
          <span className=" text-l">
            Good Flow and Silencing Characteristics
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">Body Material:</p>
          <span className=" text-l">
            Brass Body and Sintered Bronze Silencer elements
          </span>
          <p className=" font-semibold text-xl mt-2 transform skew-x-12">PSU Series:</p>
          <span className=" text-l">
            PSU Series in plastic body with porus silencing material
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
