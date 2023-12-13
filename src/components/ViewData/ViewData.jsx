// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const ViewData = ({ view }) => {
//   const { _id, name, image, bandName, category, price, rating } = view;

//   return (
//     <div>
//       <div className="card card-compact  bg-base-100 shadow-xl border border-white">
//         <figure>
//           <img className="h-[300px]" src={image} alt="" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Name: {name}</h2>
//           <h2 className="card-title">Brand: {bandName}</h2>
//           <div className="mb-3 mt-3">
//             <span className="bg-[#d33e90] py-1 px-3 text-white rounded text-xl font-normal">
//               {category}
//             </span>
//           </div>
//           <div className=" flex gap-10">
//             <h4 className=" text-xl">Price: {price}</h4>
//             <div>
//               <h4 className=" text-xl">Rating: {rating}</h4>
//             </div>
//           </div>
//           <div className="card-actions justify-center mt-10 gap-10">
//             <Link to={`/details/${_id}`}>
//               <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
//                 Details
//               </button>
//             </Link>
//             <Link to={`/update/${_id}`}>
//               <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
//                 Update
//               </button>
//             </Link>

//             <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
//               shear
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewData;

/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaRegShareSquare } from "react-icons/fa";

const ViewData = ({ view }) => {
  const { _id, name, image, bandName, category, price, rating } = view;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: name,
          text: `Check out this product: ${name}`,
          url: window.location.href,
        });
      } else {
        console.log("Web Share API not supported");
        // Handle fallback if Web Share API is not supported
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl border border-white">
        <figure>
          <img className="h-[300px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-between">
            <h2 className="card-title">Name: {name}</h2>
            <div>
              <button
                className="btn btn-outline text-black border-0 border-[#d33e90] hover:bg-[#d33e90] hover:border-b-[#d33e90] border-b-4"
                onClick={handleShare}
              >
                <FaRegShareSquare />
                share
              </button>
            </div>
          </div>

          <h2 className="card-title">Brand: {bandName}</h2>
          <div className="mb-3 mt-3">
            <span className="bg-[#d33e90] py-1 px-3 text-white rounded text-xl font-normal">
              {category}
            </span>
          </div>
          <div className=" flex gap-10">
            <h4 className=" text-xl">Price: {price}</h4>
            <div>
              <h4 className=" text-xl">Rating: {rating}</h4>
            </div>
          </div>
          <div className="card-actions justify-center mt-10 gap-10">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
                Details
              </button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
