import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const update = useLoaderData();
  const { _id, name, image, bandName, category, price, rating, description } =
    update;
  console.log(update);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const bandName = form.bandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const bandProduct = {
      name,
      bandName,
      category,
      price,
      description,
      rating,
      image,
    };
    console.log(bandProduct);
    //send data to server
    fetch(
      `https://technology-and-electronics-server-beige.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bandProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className=" bg-[#F4F3F0] lg:p-24 md:p-10 p-5">
      <h2 className=" text-xl font-semibold">Update Product: {name}</h2>
      <form onSubmit={handleUpdate}>
        {/* form name and brand name row */}
        <div className=" md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Band Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Band Name"
                defaultValue={bandName}
                name="bandName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and price row */}
        <div className=" md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category Name"
                defaultValue={category}
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                defaultValue={price}
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form short description and rating row */}
        <div className=" md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short description"
                name="description"
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form image url row */}
        <div className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
                defaultValue={image}
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Product"
          className="btn btn-block mt-5 bg-[#d2b48c] hover:bg-[#c19862]"
        />
      </form>
    </div>
  );
};

export default Update;
