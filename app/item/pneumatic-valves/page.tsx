import { cn } from "@/lib/utils";
import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className="flex-col justify-center space-y-10">
       <br/>
      <div className=" flex justify-center font-bold text-5xl text-slate-700">
        Pneumatic Valves
      </div>
      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Solenoid Valves
      </div>

      <div className="p-2 font-semibold text-3xl">1. Compact Solenoid Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Compact Solenoid Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">M5, G1/8, G1/4, G3/8 and G1/2</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Types:</p>
          <span className=" text-l">
            3/2 No, NC and 5/2 external pilot operated, single and double
            solenoid operated versions{" "}
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Operation:</p>
          <span className=" text-l">
            5/3 external pilot operated and double solenoid spring centered
            versions
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Application:</p>
          <span className=" text-l">Suitable for manifold mounting</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Range:</p>
          <span className=" text-l">Wide range of manifolds available</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Coil Voltage:</p>
          <span className=" text-l">Wide range of coil voltages</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">tandard:</p>
          <span className=" text-l">
            Solenoid connectors conforms to DIN 43650 standards
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

      <div className="p-2 font-semibold text-3xl">
        2. Direct Operating and Diaphragm Operated Valves
      </div>
      <div className=" block text-center items-start">
        {" "}
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Direct Operating and Diaphragm Operated Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          {" "}
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">
            G1/4, G3/8, G1/2, G3/4, G1 1/4, G1 1/2 and G2
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Version:</p>
          <span className=" text-l">2/2 version</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Application:</p>
          <span className=" text-l">Air and Water</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Body Material:</p>
          <span className=" text-l">Brass</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Types:</p>
          <span className=" text-l">
            Available in round coil as well as in DIN type
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Coil Voltage:</p>
          <span className=" text-l">
            24V DC and 220V AC, other coil voltage available on order
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

      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Mechanical Valves
      </div>

      <div className="p-2 font-semibold text-3xl">
        1. Compact Manually Operated Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Compact Manually Operated Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">G1/4 and G1/2</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Version:</p>
          <span className=" text-l">
            3/2 and 5/2 Hand lever and Push pull versions
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Operation:</p>
          <span className=" text-l">
            5/3 Hand lever operated spring centered versions
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Application:</p>
          <span className=" text-l">Suitable for panel mounting</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Mounting:</p>
          <span className=" text-l">
            Mounting provision for individual unit
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

      <div className="p-2 font-semibold text-3xl">
        2. Compact Mechanical Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Compact Mechanical Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Design:</p>
          <span className=" text-l">Spool design</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">G1/8 and G1/4</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Ports:</p>
          <span className=" text-l">Port position available 3/2 and 5/2</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Type:</p>
          <span className=" text-l">Panel mounting type</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Mounting:</p>
          <span className=" text-l">
            Mounting provision for individual unit
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Actuation:</p>
          <span className=" text-l">
            Roller Lever, Palm latching, Lever Actuator, Turning Actuator, Palm
            Actuator and Palm Button
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
      <div>
        <div className="p-2 font-semibold text-3xl">Food Operated Valves</div>
        <div className=" block text-center items-start">
          <Image
            alt=""
            className=" float-left  w1/2 me-4 ms-4"
            src={`/3. Food Operated Valves.jpg`}
            height={450}
            width={450}
          ></Image>
          <div className=" text-justify">
            <p className="font-semibold text-3xl text-gray-500 ">Features</p>
            <p className="  font-semibold text-xl mt-2 transform skew-x-12">Tread Sizes:</p>
            <span className=" text-l">G1/4</span>
            <p className="  font-semibold text-xl mt-2 transform skew-x-12">Versions:</p>
            <span className=" text-l">3/2 and 5/2 versions</span>
            <p className="  font-semibold text-xl mt-2 transform skew-x-12">Operation:</p>
            <span className=" text-l">
              Foot operated valves with lock and guard version available
            </span>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br />
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}
      <br />
      <br />
      <div className="p-2 font-semibold text-3xl">4. Airline Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/4. Airline Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">G1/8, G1/4, G3/8 and G1/2</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Flow Control:</p>
          <span className=" text-l">Flow control valves (ASC, KLA Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Hand Slide Valves:</p>
          <span className=" text-l">(HSV Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
          Quick Exhaust Valves:
          </p>
          <span className=" text-l">(QEV, XQ Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Non-Return Valves:</p>
          <span className=" text-l">(CV Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Shuttle Valves:</p>
          <span className=" text-l">(KV Series)</span>
        </div>
      </div>
      <br/>
      <br/>
    
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className="p-2 font-semibold text-3xl">5. Vacuum Generator</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/5. Vacuum Generator.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Thread Sizes:</p>
          <span className=" text-l">G1/4 and G3/8</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Final Vacuum:</p>
          <span className=" text-l">-91.8 kPa (-690mmHg)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Body Material:</p>
          <span className=" text-l">Hard anodised aluminium body</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            Quick Exhaust Valves:
          </p>
          <span className=" text-l">(QEV, XQ Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Non-Return Valves:</p>
          <span className=" text-l">(CV Series)</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Shuttle Valves:</p>
          <span className=" text-l">(KV Series)</span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Ball Valves
      </div>
      <div className="p-2 font-semibold text-3xl">
        1. Heavy Duty Brass Ball Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/1. Heavy Duty Brass Ball Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            {" "}
            Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            Maximum and Minimum Working Temperature:
          </p>
          <span className=" text-l">-15°C to 120°C</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className="  font-semibold text-xl mt-2 transform skew-x-12">Materials</p>
        <p>Valve Body: Hot Presses Brass OT58</p>
        <p>Handle: Steel Handle with Blue Plastic Cover</p>
        <p>Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>Seal: Teflon (PTFE)</p>
        <p>Stem: Hot Pressed Brass OT-58</p>
        <p>Stem Seal: Hot Pressed Brass OT-58</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className="p-2 font-semibold text-3xl">
        2. T Handle Brass Ball Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/2. T Handle Brass Ball Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            {" "}
            Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-15°C to 120°C</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/2&ldquo; to 1&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className="  font-semibold text-xl mt-2 transform skew-x-12">Materials</p>
        <p>Valve Body: Hot Presses Brass OT58</p>
        <p>Handle: Aluminium Powder Coated</p>
        <p>Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>Seal: Teflon (PTFE)</p>
        <p>Stem: Hot Pressed Brass OT-58</p>
        <p>Stem Seal: Hot Pressed Brass OT-58</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className="p-2 font-semibold text-3xl">3. Mini Brass Ball Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/3. Mini Brass Ball Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            {" "}
            Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-10°C to 90°C</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 1/2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className="  font-semibold text-xl mt-2 transform skew-x-12">Materials</p>
        <p>Valve Body: Chrome-Plated Brass OT58</p>
        <p>Handle: Nylon 66</p>
        <p>Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>Seal: Teflon (PTFE)</p>
        <p>Stem: Hot Pressed Brass OT-58</p>
        <p>Stem Seal: O-Ring</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className="p-2 font-semibold text-3xl">
        4. Male / Female Mini Brass Ball Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/4. Male Female Mini Brass Ball Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-3xl text-gray-500 ">Features</p>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
            {" "}
            Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">
          Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-10°C to 90°C</span>
          <p className="  font-semibold text-xl mt-2 transform skew-x-12">Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 1/2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className="  font-semibold text-xl mt-2 transform skew-x-12">Materials</p>
        <p>Valve Body: Chrome-Plated Brass OT58</p>
        <p>Handle: Nylon 66</p>
        <p>Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>Seal: Teflon (PTFE)</p>
        <p>Stem: Hot Pressed Brass OT-58</p>
        <p>Stem Seal: O-Ring</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
    </div>
  );
};

export default AirCylinders;
