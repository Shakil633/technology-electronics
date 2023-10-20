import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { user } = useContext(AuthContext);
  const brandDataLoad = useLoaderData();
  const { _id, image, name, description } = brandDataLoad;
  console.log(brandDataLoad);

  const info = {
    id: _id,
    image,
    name,
    description,
    email: user?.email,
  };

  const handleProductAdd = () => {
    console.log(info);
    fetch(
      "https://technology-and-electronics-server-nadg6amp7.vercel.app/userData",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added Successfully");
        }
      });
  };

  return (
    <div className="lg:px-28 md:px-10 px-5 mt-16 mb-28">
      <div className="">
        <img className=" w-[40%] mx-auto rounded-lg" src={image} alt="" />
      </div>

      <div>
        <h2 className=" md:text-3xl text-2xl font-semibold mt-6">{name}</h2>
        <p className=" md:text-base text-sm font-normal mb-5 text-[#0b0b0bb3] mt-3">
          {description}
        </p>

        <div>
          <button
            onClick={handleProductAdd}
            className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
