/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// // /* eslint-disable @next/next/no-img-element */
// // "use client"
// // import './style.css'

// // const ClientGallery = () => {
// //   return (
// //     <div className="slider relative h-100 mx-auto overflow-hidden">
// //       <div className="before-after-gradient"></div>
// //       <div
// //         className="slide-track animate-scroll flex items-center"
// //         style={{ width: "calc(250px * 14)" }}
// //       >
// //         <div className="slide me-2 h-100 w-250 ">
// //           <img src="bajaj-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //         <div className="slide me-2 h-100 w-250">
// //           <img src="montra-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //         <div className="slide me-2 h-100 w-250">
// //           <img src="hero-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //         <div className="slide me-2 h-100 w-250">
// //           <img src="bosch-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //         <div className="slide me-2 h-100 w-250">
// //           <img src="kia-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //         <div className="slide me-2 h-100 w-250">
// //           <img src="xcmg-logo.svg" className="h-50 w-50" alt="" />
// //         </div>
// //       </div>
// //       {/* <style>
// //         {`
// //           .slider::before,
// //           .slider::after {
// //             background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
// //             content: "";
// //             position: absolute;
// //             height: 100px;
// //             width: 200px;
// //             z-index: 2;
// //           }

// //           .slider::after {
// //             right: 0;
// //             top: 0;
// //             transform: rotateZ(180deg);
// //           }

// //           .slider::before {
// //             left: 0;
// //             top: 0;
// //           }

// //           .slide-track {
// //             width: calc(250px * 14);
// //             animation: scroll 40s linear infinite;
// //           }

// //           .slide {
// //             height: 100px;
// //             width: 250px;
// //           }

// //           @keyframes scroll {
// //             0% {
// //               transform: translateX(0);
// //             }
// //             100% {
// //               transform: translateX(calc(-250px * 7));
// //             }
// //           }
// //         `}
// //       </style> */}
// //     </div>
// //   );
// // };

// // export default ClientGallery;
// "use client"

// import React, { useEffect, useRef } from "react";

// const images = [
//   { src: "/bajaj-logo.svg", alt: "Bajaj Logo", height: 50, width: 50 },
//   { src: "/montra-logo.svg", alt: "Montra Logo", height: 50, width: 50 },
//   { src: "/hero-logo.svg", alt: "Hero Logo", height: 50, width: 50 },
//   // Add more images as needed
// ];

// const ClientGallery = () => {
//   const slideTrackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const track = slideTrackRef.current;

//     if (track) {
//       const handleAnimationIteration = () => {
//         track.style.transition = "none";
//         track.style.transform = "translateX(0)";
//         void track.offsetWidth; // Trigger reflow
//         track.style.transition = "transform 0.5s linear";
//       };

//       track.addEventListener("animationiteration", handleAnimationIteration);

//       return () => {
//         track.removeEventListener(
//           "animationiteration",
//           handleAnimationIteration
//         );
//       };
//     }
//   }, []);

//   return (
//     <div className="slider relative h-100 mx-auto overflow-hidden">
//       <div className="before-after-gradient"></div>
//       <div
//         ref={slideTrackRef}
//         className="slide-track animate-scroll flex items-center"
//         style={{ width: `calc(${images.length * 250}px)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="slide h-100 w-full">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className={`h-${image.height} w-${image.width}`}
//             />
//           </div>
//         ))}
//       </div>
//       <style jsx global>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-250px * ${images.length}));
//           }
//         }

//         .slide-track {
//           width: 10000%;
//           animation: scroll ${images.length * 5}s linear infinite; // Adjust the duration based on your preference
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClientGallery;

import React from "react";

const index = () => {
  return (
    <>
      <div className="">
        <div className=" relative mt-5 lg:m-10 flex justify-between">
          <p className=" flex justify-around  text-amber-600 font-semibold text-xl lg:text-4xl w-full">
            OUR MAJOR SUPPORTING CLIENTS
          </p>
        </div>
      </div>

      <div className=" flex justify-between p-5 space-x-3 mt-5 mb-5  relative h-100 mx-auto ">
        {/* <div className="before-after-gradient"></div> */}
        {/* <div
          className="slide-track animate-scroll flex "
          style={{ width: "calc(250px * 14)" }}
        > */}
        <div className="  h-100 w-250 ">
          <img src="bajaj-logo.svg" className="h-[100px] w-[200px]" alt="" />
        </div>
        <div className="  h-100 w-250">
          <img src="montra-logo.svg" className="h-[100px] w-[200px]" alt="" />
        </div>
        <div className="  h-100 w-250">
          <img src="hero-logo.svg" className="h-[100px] w-[200px]" alt="" />
        </div>
        <div className="  h-100 w-250">
          <img
            src="bosch-logo.svg"
            className="h-[100px] me-14 w-[200px]"
            alt=""
          />
        </div>
        <div className="  h-100 w-250">
          <img src="kia-logo.svg" className="h-[100px] w-[250px]" alt="" />
        </div>
        {/* <div className=" ">
          <img src="xcmg-logo.svg" className="h-[100px] w-[250px]" alt="" />
        </div> */}
      </div>
      {/* // </div> */}
    </>
  );
};

export default index;
