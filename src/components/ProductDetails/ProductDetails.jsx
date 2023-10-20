import { useLoaderData } from "react-router-dom";
import ViewData from "../ViewData/ViewData";

const ProductDetails = () => {
  const productData = useLoaderData();
  console.log(productData);
  if (!productData || productData.length == 0) {
    return (
      <p className="text-5xl text-center font-bold mt-[250px]">No Data Here</p>
    );
  }
  return (
    <div>
      <div className="lg:px-24 md:px-10 px-5 mt-10">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/FsxmKst/1578-43798.jpg"
            className="w-[50%] mx-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/HqHsXy4/3219-49082.jpg"
            className="w-[50%] mx-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Bt346m9/4588-97292.jpg"
            className="w-[50%] mx-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/s1yDY8b/1586-85986.jpg"
            className="w-[50%] mx-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-16 lg:px-20 md:px-10 px-5 mb-20">
        {productData.map((view) => (
          <ViewData key={view._id} view={view}></ViewData>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
