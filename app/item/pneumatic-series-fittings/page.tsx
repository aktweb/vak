import Image from "next/image";
const AirCylinders = () => {
  return (
    <div className=" flex-col space-y-10">
      <div className=" flex justify-center font-semibold text-xl">
        Pneumatic Series Fittings
      </div>

      <div className=" p-2 font-bold text-2xl">1. One Touch Fittings</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/1. One Touch Fittings.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Tube Sizes:</p>
          <span className=" text-l">
            4, 6, 8,10, 12, 14 and 16 mm OD tubing&apos;s
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Thread Sizes:</p>
          <span className=" text-l">MS, R1/8, R1/4, R3/8 and R1/2</span>
          <p className=" font-semibold text-xl mt-2">iii. Models:</p>
          <span className=" text-l">40 different model configuration</span>
          <p className=" font-semibold text-xl mt-2">iv. Raw Material:</p>
          <span className=" text-l">
            Made from brass body and high quality PA and POM grade raw material
          </span>
          <p className=" font-semibold text-xl mt-2">v. Connection:</p>
          <span className=" text-l">
            Fast and instant connection / removal of tubes
          </span>
          <p className=" font-semibold text-xl mt-2">vi. Sealing:</p>
          <span className=" text-l">Bubble tight sealing</span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>

      {/* ---------- */}

      <div className=" p-2 font-bold text-2xl">
        2. Push On Two Touch Fittings
      </div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/2. Push On Two Touch Fittings.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Tube Sizes:</p>
          <span className=" text-l">
            3, 4, 6, 8, 10 and 12 mm ID tubing&apos;s
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Thread Sizes:</p>
          <span className=" text-l">M5, G1/8, G1/4, G3/8 and G1/2</span>
          <p className=" font-semibold text-xl mt-2">iii. Models:</p>
          <span className=" text-l">13 different model configuration</span>
          <p className=" font-semibold text-xl mt-2">iv. Raw Material:</p>
          <span className=" text-l">
            Made from Aluminium and Brass raw material
          </span>
          <p className=" font-semibold text-xl mt-2">v. Sealing:</p>
          <span className=" text-l">Bubble tight sealing</span>
        </div>
      </div>

      <div className=" flex justify-center">
        <hr className=" w-[80%] font-semibold" />
      </div>
      {/* ---------- */}

      <div className=" p-2 font-bold text-2xl">3. Brass Fittings</div>
      <div className=" block text-center items-start">
        <Image
          alt=""
          className=" float-left  w1/2 me-4 ms-4"
          src={`/3. Brass Fittings.jpg`}
          height={450}
          width={450}
        ></Image>
        <div className=" text-justify">
          <p className="font-semibold text-2xl ">Features</p>
          <p className=" font-semibold text-xl mt-2"> i. Thread Sizes:</p>
          <span className=" text-l">
            M5, G1/8, G1/4, G3/8, G1/2, G3/4 and G1
          </span>
          <p className=" font-semibold text-xl mt-2">ii. Range:</p>
          <span className=" text-l">Wide range available</span>
          <p className=" font-semibold text-xl mt-2">iii. Raw Material:</p>
          <span className=" text-l">Made from Brass Raw Material</span>
          <p className=" font-semibold text-xl mt-2">iv. Configuration:</p>
          <span className=" text-l">
            Hex Nipple, Reducing Nipple, Female Tree, Male Tree, Female Elbow,
            Male Elbow, Male Hose Nipple, Female Hose Nipple, Elbow Male Hose
            Nipple, Pipe Coupling, Hex Blanking Plug and Hose Nipple Nut Set
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
