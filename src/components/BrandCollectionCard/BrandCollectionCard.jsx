import { Link } from "react-router-dom";

const BrandCollectionCard = ({ brand }) => {
  const { _id, bandName, photo } = brand;
  return (
    <Link to={`/products/${_id}`}>
      <div className="card card-compact h-[300px] bg-base-100 shadow-xl rounded-lg">
        <figure>
          <img className="h-[300px] w-full" src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{bandName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCollectionCard;
