import {useLoaderData } from "react-router-dom";
import "./Banner.css";
import BrandCollectionCard from "../BrandCollectionCard/BrandCollectionCard";

const Banner = () => {
  const brandDataLoad = useLoaderData();
  console.log(brandDataLoad);
  return (
    <div>
      <div>
        <img className="w-full border-b-2 border-white" src="https://i.ibb.co/dp2rQt7/new-slider.jpg" alt="" />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-3xl font-bold lg:mb-20 md:mb-16 mb-10">
          Our Collection Brand
        </h2>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 md:px-10 px-5 gap-5">
        {brandDataLoad.map((brand) => (
          <BrandCollectionCard
            key={brand._id}
            brand={brand}
          ></BrandCollectionCard>
        ))}
      </div>

      <div>
        <div className="lg:mt-24 md:mt-10 mt-10 mb-10 lg:px-20 md:px-10 px-5">
          <img className="border-2 border-white"
            src="https://i.ibb.co/VQcrWwd/centerbanner-1350x400.jpg"
            alt=""
          />
        </div>

        <div className="lg:px-20 md:px-10 px-5 lg:mt-24 md:mt-24 mt-5 mb-16">
          <div className=" flex lg:flex-row md:flex-row flex-col gap-7 items-center">
            <div className=" flex lg:flex-row md:flex-row flex-col items-center gap-7">
              <div>
                <img
                  className="lg:h-[460px] md:h-[340px] rounded border-2 border-white"
                  src="https://i.ibb.co/jLHXKyM/banner-1.webp"
                  alt=""
                />
              </div>
              <div>
                <img className="rounded-t border-t-2  border-white" src="https://i.ibb.co/hcLLJwb/banner-2.webp" alt="" />
                <img className=" rounded-b border-b-2 border-white" src="https://i.ibb.co/XZMBr7D/banner-3.webp" alt="" />
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
