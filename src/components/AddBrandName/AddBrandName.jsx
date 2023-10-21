import toast from "react-hot-toast";

const AddBrandName = () => {
  const handleAddBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const bandName = form.bandName.value;
    const photo = form.photo.value;
    const nameBand = {
      bandName,
      photo,
    };
    console.log(nameBand);

    // send data to the server
    fetch("https://technology-and-electronics-server-beige.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(nameBand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added Successfully");
        }
      });
  };
  return (
    <div className=" bg-[#F4F3F0] p-24">
      <h2 className=" text-3xl font-extrabold mb-8 text-center mb-5">
        Add Brand Name
      </h2>

      <form onSubmit={handleAddBrand}>
        {/* form name and quantity row */}
        <div className=" md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Band Name"
                name="bandName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form photo url row */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Brand Name"
          className="btn btn-block mt-5 bg-[#d2b48c] hover:bg-[#c19862]"
        />
      </form>
    </div>
  );
};

export default AddBrandName;
