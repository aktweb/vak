import { cn } from "@/lib/utils";
import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className=" p-2 flex-col space-y-10">
      <div className=" flex justify-center font-semibold text-xl">
        Pneumatic Valves
      </div>
      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Solenoid Valves
      </div>

      <div className=" p-2 font-bold text-2xl">1. Compact Solenoid Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Compact Solenoid Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">M5, G1/8, G1/4, G3/8 and G1/2</span>
          <p className=" font-semibold text-xl mt-2">ii. Types:</p>
          <span className=" text-l">
            3/2 No, NC and 5/2 external pilot operated, single and double
            solenoid operated versions{" "}
          </span>
          <p className=" font-semibold text-xl mt-2">iii. Operation:</p>
          <span className=" text-l">
            5/3 external pilot operated and double solenoid spring centered
            versions
          </span>
          <p className=" font-semibold text-xl mt-2">iv. Application:</p>
          <span className=" text-l">Suitable for manifold mounting</span>
          <p className=" font-semibold text-xl mt-2">v. Range:</p>
          <span className=" text-l">Wide range of manifolds available</span>
          <p className=" font-semibold text-xl mt-2">vi. Coil Voltage:</p>
          <span className=" text-l">Wide range of coil voltages</span>
          <p className=" font-semibold text-xl mt-2">vii. Standard:</p>
          <span className=" text-l">
            Solenoid connectors conforms to DIN 43650 standards
          </span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      <div className=" p-2 font-bold text-2xl">
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
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">
            G1/4, G3/8, G1/2, G3/4, G1 1/4, G1 1/2 and G2
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Version:</p>
          <span className=" text-l">2/2 version</span>
          <p className=" font-semibold text-xl mt-2">iii. Application:</p>
          <span className=" text-l">Air and Water</span>
          <p className=" font-semibold text-xl mt-2">iv. Body Material:</p>
          <span className=" text-l">Brass</span>
          <p className=" font-semibold text-xl mt-2">v. Types:</p>
          <span className=" text-l">
            Available in round coil as well as in DIN type
          </span>
          <p className=" font-semibold text-xl mt-2">vi. Coil Voltage:</p>
          <span className=" text-l">
            24V DC and 220V AC, other coil voltage available on order
          </span>
        </div>
      </div>
      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}

      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Mechanical Valves
      </div>

      <div className=" p-2 font-bold text-2xl">
        1. Compact Manually Operated Valves
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/Compact Manually Operated Valves
.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">G1/4 and G1/2</span>
          <p className=" font-semibold text-xl mt-2">ii. Version:</p>
          <span className=" text-l">
            3/2 and 5/2 Hand lever and Push pull versions
          </span>
          <p className=" font-semibold text-xl mt-2">iii. Operation:</p>
          <span className=" text-l">
            5/3 Hand lever operated spring centered versions
          </span>
          <p className=" font-semibold text-xl mt-2">iv. Application:</p>
          <span className=" text-l">Suitable for panel mounting</span>
          <p className=" font-semibold text-xl mt-2">v. Mounting:</p>
          <span className=" text-l">
            Mounting provision for individual unit
          </span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}

      <div className=" p-2 font-bold text-2xl">
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
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Design:</p>
          <span className=" text-l">Spool design</span>
          <p className=" font-semibold text-xl mt-2">ii. Thread Sizes:</p>
          <span className=" text-l">G1/8 and G1/4</span>
          <p className=" font-semibold text-xl mt-2">iii. Ports:</p>
          <span className=" text-l">Port position available 3/2 and 5/2</span>
          <p className=" font-semibold text-xl mt-2">iv. Type:</p>
          <span className=" text-l">Panel mounting type</span>
          <p className=" font-semibold text-xl mt-2">v. Mounting:</p>
          <span className=" text-l">
            Mounting provision for individual unit
          </span>
          <p className=" font-semibold text-xl mt-2">vi. Actuation:</p>
          <span className=" text-l">
            Roller Lever, Palm latching, Lever Actuator, Turning Actuator, Palm
            Actuator and Palm Button
          </span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}
      <div>
        <div className=" p-2 font-bold text-2xl">3. Food Operated Valves</div>
        <div className=" block text-center items-start">
          <Image
            alt=""
            className=" float-left  w1/2 me-4 ms-4"
            src={`/3. Food Operated Valves.jpg`}
            height={450}
            width={450}
          ></Image>
          <div className=" text-justify">
            <p className="font-semibold text-2xl ">Features</p>
            <p className=" font-semibold text-xl mt-2"> i. Tread Sizes:</p>
            <span className=" text-l">G1/4</span>
            <p className=" font-semibold text-xl mt-2">ii. Versions:</p>
            <span className=" text-l">3/2 and 5/2 versions</span>
            <p className=" font-semibold text-xl mt-2">iii. Operation:</p>
            <span className=" text-l">
              Foot operated valves with lock and guard version available
            </span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}
      <br />
      <br />
      <div className=" p-2 font-bold text-2xl">4. Airline Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/4. Airline Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">G1/8, G1/4, G3/8 and G1/2</span>
          <p className=" font-semibold text-xl mt-2">ii. Flow Control:</p>
          <span className=" text-l">Flow control valves (ASC, KLA Series)</span>
          <p className=" font-semibold text-xl mt-2">iii. Hand Slide Valves:</p>
          <span className=" text-l">(HSV Series)</span>
          <p className=" font-semibold text-xl mt-2">
            iv. Quick Exhaust Valves:
          </p>
          <span className=" text-l">(QEV, XQ Series)</span>
          <p className=" font-semibold text-xl mt-2">v. Non-Return Valves:</p>
          <span className=" text-l">(CV Series)</span>
          <p className=" font-semibold text-xl mt-2">vi. Shuttle Valves:</p>
          <span className=" text-l">(KV Series)</span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" p-2 font-bold text-2xl">5. Vacuum Generator</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/5. Vacuum Generator.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">G1/4 and G3/8</span>
          <p className=" font-semibold text-xl mt-2">ii. Final Vacuum:</p>
          <span className=" text-l">-91.8 kPa (-690mmHg)</span>
          <p className=" font-semibold text-xl mt-2">iii. Body Material:</p>
          <span className=" text-l">Hard anodised aluminium body</span>
          <p className=" font-semibold text-xl mt-2">
            iv. Quick Exhaust Valves:
          </p>
          <span className=" text-l">(QEV, XQ Series)</span>
          <p className=" font-semibold text-xl mt-2">v. Non-Return Valves:</p>
          <span className=" text-l">(CV Series)</span>
          <p className=" font-semibold text-xl mt-2">vi. Shuttle Valves:</p>
          <span className=" text-l">(KV Series)</span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" flex  ms-6 justify-start text-neutral-600 font-semibold text-3xl">
        Ball Valves
      </div>
      <div className=" p-2 font-bold text-2xl">
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
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2">
            {" "}
            i. Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className=" font-semibold text-xl mt-2">
            ii. Maximum and Minimum Working Temperature:
          </p>
          <span className=" text-l">-15°C to 120°C</span>
          <p className=" font-semibold text-xl mt-2">iii. Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className=" font-semibold text-xl mt-2">Materials</p>
        <p>i. Valve Body: Hot Presses Brass OT58</p>
        <p>ii. Handle: Steel Handle with Blue Plastic Cover</p>
        <p>iii. Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>iv. Seal: Teflon (PTFE)</p>
        <p>v. Stem: Hot Pressed Brass OT-58</p>
        <p>vi. Stem Seal: Hot Pressed Brass OT-58</p>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" p-2 font-bold text-2xl">
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
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2">
            {" "}
            i. Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className=" font-semibold text-xl mt-2">
            ii. Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-15°C to 120°C</span>
          <p className=" font-semibold text-xl mt-2">iii. Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/2&ldquo; to 1&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className=" font-semibold text-xl mt-2">Materials</p>
        <p>i. Valve Body: Hot Presses Brass OT58</p>
        <p>ii. Handle: Aluminium Powder Coated</p>
        <p>iii. Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>iv. Seal: Teflon (PTFE)</p>
        <p>v. Stem: Hot Pressed Brass OT-58</p>
        <p>vi. Stem Seal: Hot Pressed Brass OT-58</p>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" p-2 font-bold text-2xl">3. Mini Brass Ball Valves</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/3. Mini Brass Ball Valves.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2">
            {" "}
            i. Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className=" font-semibold text-xl mt-2">
            ii. Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-10°C to 90°C</span>
          <p className=" font-semibold text-xl mt-2">iii. Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 1/2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className=" font-semibold text-xl mt-2">Materials</p>
        <p>i. Valve Body: Chrome-Plated Brass OT58</p>
        <p>ii. Handle: Nylon 66</p>
        <p>iii. Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>iv. Seal: Teflon (PTFE)</p>
        <p>v. Stem: Hot Pressed Brass OT-58</p>
        <p>vi. Stem Seal: O-Ring</p>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      <div className=" p-2 font-bold text-2xl">
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
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2">
            {" "}
            i. Suitable for Industrial, Pneumatic, Domestic and Hydraulic
            Installation:
          </p>
          <span className=" text-l">
            Hot water, Steam, Gasoline, Fuel, Oil, Gas-oil, Kerosene, Acids,
            Compressed Air.
          </span>
          <p className=" font-semibold text-xl mt-2">
            ii. Maximum and Minimum Working Temperature:{" "}
          </p>
          <span className=" text-l">-10°C to 90°C</span>
          <p className=" font-semibold text-xl mt-2">iii. Size:</p>
          <span className=" text-l">
            Available in all sizes from 1/4&ldquo; to 1/2&ldquo;.
          </span>
        </div>
      </div>
      <div className="ms-6">
        <p className=" font-semibold text-xl mt-2">Materials</p>
        <p>i. Valve Body: Chrome-Plated Brass OT58</p>
        <p>ii. Handle: Nylon 66</p>
        <p>iii. Ball: Hard Chrome-plated Hot Pressed Brass OT58</p>
        <p>iv. Seal: Teflon (PTFE)</p>
        <p>v. Stem: Hot Pressed Brass OT-58</p>
        <p>vi. Stem Seal: O-Ring</p>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
    </div>
  );
};

export default AirCylinders;
