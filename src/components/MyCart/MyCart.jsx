import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(
      `https://technology-and-electronics-server-nadg6amp7.vercel.app/userData/${user?.email}`
    )
      .then((res) => res.json())
      //   .then((data) => setMyData(data));
      .then((data) => setMyData(data));
  }, [user]);

  //
  if (!myData || myData.length == 0) {
    return (
      <p className="text-5xl text-center font-bold mt-[250px]">No Data Here</p>
    );
  }
  //

  const handleDeleted = (id) => {
    //make sure user is confirmed to deled
    fetch(
      `https://technology-and-electronics-server-nadg6amp7.vercel.app/userData/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("Deleted successfully");
          Swal.fire(
            "Deleted!",
            "Your Product has been deleted successfully",
            "success"
          );

          // remove the user from the ui
          const remainingUsers = myData.filter((user) => user?._id !== id);
          setMyData(remainingUsers);
        }
      });
  };

  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 mb-10 lg:px-20 md:px-10 px-5">
      {myData.map((data) => (
        <div key={data._id}>
          <div>
            <div className="card bg-base-100 h-[580px] shadow-xl">
              <figure className="px-10 pt-10">
                <img src={data.image} alt="" className=" h-[150px] w-[200px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description}</p>
                <div className="card-actions mt-5">
                  <Link to={"/"}>
                    <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
                      Back Home
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDeleted(data._id)}
                    className="btn bg-[#ed5e68] hover:bg-[#d5545d] text-white"
                  >
                    Deleted
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
