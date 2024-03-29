import { cn } from "@/lib/utils";
import Image from "next/image";
const AirControlUnits = () => {
  return (
    <div className=" p-2 flex-col space-y-10">
      <br/>
      <div className="flex justify-center font-bold text-5xl text-slate-700 ml-6">
        Air Control Units (FRLs)
      </div>
      <div className=" flex ms-6 me-6">
        <span>
          Options: Available in various options. Port Sizes: Port (Thread) Sizes
          available from M5 to 1&ldquo;. Filter Micron Rating: Standard
          available 40Micron & 5Micron. Customized Micron Ratings also available
          like 0.01Micron, 1Micron. Applications: Heavy Duty construction
          suitable for most applications. Max. Inlet Pressure: 16Kg/cm2. Max.
          Outlet Pressure: 12Kg/cm2.
        </span>
      </div>

      <div className=" p-2 font-semibold text-3xl ml-4">
        1. New Generation Air Control Units (FRLs) - O Series
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/1. New Generation Air Control Units (FRLs) - O Series.jpg`}
          height={380}
          width={380}
        ></Image>
        <div className=" text-justify ml-3">
          <p className="font-semibold text-2xl text-gray-500 ">Features</p>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12"> Thread Sizes:</p>
          <span className=" text-l">
            M5, G1/8, G1/4, G3/8, G1/2, G3/4 and G1
          </span>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12"> Combination Units:</p>
          <span className=" text-l">
            Filter Regulator + Lubricator, Filter Regulator, Air Regulator, Air
            Lubricator, Air Filter and Micro Filter
          </span>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12"> Modular Units:</p>
          <span className=" text-l">For easy maintenance</span>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12"> Accessories:</p>
          <span className=" text-l">
            Wall and Panel Mounting Brackets, connecting nipples and pressure
            guages
          </span>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12"> Automatic Drain:</p>
          <span className=" text-l">(Internal)</span>
          <p className="   font-semibold text-xl mt-2 transform skew-x-12 transform skew-x-12">
             Precision Regulators:
          </p>
          <span className=" text-l">G1/8, G1/4, G1/2</span>
        </div>
      </div>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      <div className=" p-2 font-semibold text-3xl ml-4">2. Filter Regulator / OFR</div>
      <div className=" block text-center items-start">
        {" "}
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/2. Filter Regulator OFR.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify ml-3">
          {" "}
          <span className=" text-l">
            Filter and pressure regulator combine a single unit and cleans the
            compressed air of fluid oil, condensation and dirt particles. For
            special application, the standard 40µm filter element may easily be
            replaced by a 5µm filter element. The OR maintain inputting constant
            operating pressure despite fluctuation in line pressure and the
            amount of air consumed.
          </span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}

      <div className=" p-2 font-semibold text-3xl ml-4">3. Regulator / OR</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/3. Regulator.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify ml-3">
          <p className="  text-l mt-2">
            The OR maintain inputting constant operating pressure despite
            fluctuation in line pressure and the amount of air consumed.
          </p>
        </div>
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
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      <div className=" p-2 font-semibold text-3xl ml-4">4. Filter / OF</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/4. Filter.jpg`}
          height={350}
          width={350}
        ></Image>
        <div className=" text-justify ml-3">
          <span className=" text-l">
            The OF water separator cleans the compressed air of fluid oil,
            condensation and dirt particles for special application, the
            standard 40µm filter element may easily be replaced by a 5µm filter
            element.
          </span>
        </div>
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
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}
      <div>
        <div className=" p-2 font-semibold text-3xl ml-4">5. Lubricator / OL</div>
        <div className=" block text-center items-start">
          <Image
            alt=""
            className=" float-left  w1/2 me-4 ms-4"
            src={`/5. Lubricator.jpg`}
            height={350}
            width={350}
          ></Image>
          <div className=" text-justify ml-3">
            <span className=" text-l">
              The direct constant-density lubricator should be added regulated
              oil quality to the compressed air . <br />
              The valve maintains oil mist content proportional to the
              compressed oil flow. <br /> The pressure drop that occurs when the
              air flow through a sight feed oil cup delivers oil from the bowl
              to the sight oil indicator. The drop of the oil flows into the air
              channel when it is atomized. <br /> The oil drip rate is
              controlled by means of the regulating screw. Normally, 1 to 12
              drop / 1000L of the air is sufficient.{" "}
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}
    </div>
  );
};

export default AirControlUnits;
