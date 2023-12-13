// import { useLoaderData } from "react-router-dom";
// import "./Banner.css";
// import BrandCollectionCard from "../BrandCollectionCard/BrandCollectionCard";

// const Banner = () => {
//   const brandDataLoad = useLoaderData();
//   console.log(brandDataLoad);
//   return (
//     <div>
//       <div>
//         <img
//           className="w-full border-b-2 border-white"
//           src="https://i.ibb.co/dp2rQt7/new-slider.jpg"
//           alt=""
//         />
//       </div>
//       <div className="mt-10">
//         <h2 className=" text-center text-3xl font-bold lg:mb-20 md:mb-16 mb-10">
//           Our Collection Brand
//         </h2>
//       </div>

//       <div className=" flex justify-center mb-10">
//         <div className="flex gap-5">
//           <div>
//             <span className="countdown font-mono text-4xl">
//               <span style={{ "--value": 15 }}></span>
//             </span>
//             days
//           </div>
//           <div>
//             <span className="countdown font-mono text-4xl">
//               <span style={{ "--value": 10 }}></span>
//             </span>
//             hours
//           </div>
//           <div>
//             <span className="countdown font-mono text-4xl">
//               <span style={{ "--value": 24 }}></span>
//             </span>
//             min
//           </div>
//           <div>
//             <span className="countdown font-mono text-4xl">
//               <span style={{ "--value": 37 }}></span>
//             </span>
//             sec
//           </div>
//         </div>
//       </div>

//       <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 md:px-10 px-5 gap-5">
//         {brandDataLoad.map((brand) => (
//           <BrandCollectionCard
//             key={brand._id}
//             brand={brand}
//           ></BrandCollectionCard>
//         ))}
//       </div>

//       <div>
//         <div className="lg:mt-24 md:mt-10 mt-10 mb-10 lg:px-20 md:px-10 px-5">
//           <img
//             className="border-2 border-white"
//             src="https://i.ibb.co/VQcrWwd/centerbanner-1350x400.jpg"
//             alt=""
//           />
//         </div>

//         <div className="lg:px-20 md:px-10 px-5 lg:mt-24 md:mt-24 mt-5 mb-16">
//           <div className=" flex lg:flex-row md:flex-row flex-col gap-7 items-center">
//             <div className=" flex lg:flex-row md:flex-row flex-col items-center gap-7">
//               <div>
//                 <img
//                   className="lg:h-[460px] md:h-[340px] rounded border-2 border-white"
//                   src="https://i.ibb.co/jLHXKyM/banner-1.webp"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <img
//                   className="rounded-t border-t-2  border-white"
//                   src="https://i.ibb.co/hcLLJwb/banner-2.webp"
//                   alt=""
//                 />
//                 <img
//                   className=" rounded-b border-b-2 border-white"
//                   src="https://i.ibb.co/XZMBr7D/banner-3.webp"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div>
//               <img
//                 className="lg:h-[460px] md:h-[340px] rounded border-2 border-white"
//                 src="https://i.ibb.co/gVcKfTC/banner-4.webp"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Banner.css";
import BrandCollectionCard from "../BrandCollectionCard/BrandCollectionCard";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const brandDataLoad = useLoaderData();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date for the countdown (replace with your desired end date)
  const targetDate = new Date("2023-12-31T23:59:59").getTime();

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div>
      <div>
        <img
          className="w-full border-b-2 border-white"
          src="https://i.ibb.co/dp2rQt7/new-slider.jpg"
          alt=""
        />
      </div>
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold lg:mb-20 md:mb-16 mb-10">
          Our Collection Brand
        </h2>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": countdown.days }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": countdown.hours }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": countdown.minutes }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": countdown.seconds }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
  
      <div className="px-20 mb-10">
        <div className=" flex bg-[#f3f3f3] p-2">
          <button className=" btn btn-secondary">Offer Now</button>
          <Marquee pauseOnHover={true}>
            <Link to={"/"} className=" mr-5">
              Here is the best of the Best Deal!
            </Link>
            <Link to={"/"} className=" mr-5">
              Up to 40% Off 
            </Link>
            <Link to={"/"} className=" mr-5">
            Special Modern HeadPhone Style Collection
            </Link>
          </Marquee>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 md:px-10 px-5 gap-5">
        {brandDataLoad.map((brand) => (
          <BrandCollectionCard
            key={brand._id}
            brand={brand}
          ></BrandCollectionCard>
        ))}
      </div>

      <div>
        <div className="lg:mt-24 md:mt-10 mt-10 mb-10 lg:px-20 md:px-10 px-5">
          <img
            className="border-2 border-white"
            src="https://i.ibb.co/VQcrWwd/centerbanner-1350x400.jpg"
            alt=""
          />
        </div>

        <div className="lg:px-20 md:px-10 px-5 lg:mt-24 md:mt-24 mt-5 mb-16">
          <div className="flex lg:flex-row md:flex-row flex-col gap-7 items-center">
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-7">
              <div>
                <img
                  className="lg:h-[460px] md:h-[340px] rounded border-2 border-white"
                  src="https://i.ibb.co/jLHXKyM/banner-1.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-t border-t-2  border-white"
                  src="https://i.ibb.co/hcLLJwb/banner-2.webp"
                  alt=""
                />
                <img
                  className="rounded-b border-b-2 border-white"
                  src="https://i.ibb.co/XZMBr7D/banner-3.webp"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                className="lg:h-[460px] md:h-[340px] rounded border-2 border-white"
                src="https://i.ibb.co/gVcKfTC/banner-4.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
