import Star from "./Star";
import { MdMovieEdit } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MySingleCard = ({ cardData, control, setControl }) => {
  const { _id, image, item_name, scustom, price, rating, stock } = cardData;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-sync-server.vercel.app/mycrafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div className=" border border-blue-300 b bg-blue-50 p-3 rounded-md m-4 md:m-0">

      <div className=" lg:flex justify-between">
        <div className="lg:flex gap-4">
          <div className=" w-64 border">
            {image ? (
              <img src={image} />
            ) : (
              <img src="https://i.ibb.co/s61CJGq/random.jpg" />
            )}
          </div>
          <div className="content flex flex-col gap-1">
            <h1 className=" text-2xl font-bold">{item_name}</h1>

            <div className="flex items-center gap-2">
              Rating: <Star stars={rating}></Star>
            </div>
            <div className=" flex items-center gap-2">
              <span className=" flex items-center gap-2 text-gray-600">
                <MdMovieEdit></MdMovieEdit>Customization
              </span>
              <span className=" text-blue-400 px-2 rounded-md">{scustom}</span>
            </div>
            <div className=" flex items-center gap-2">
              <span className=" flex items-center gap-2 text-gray-600">
                <AiOutlineStock></AiOutlineStock>Availablity
              </span>
              <span className=" bg-green-100 text-green-700 px-2 py-1 rounded-full textarea-md">
                {stock}
              </span>
            </div>
            <p className="px-4 bg-green-500 py-1 w-20 text-white font-semibold text-center rounded-full">
              ${price}
            </p>
          </div>
        </div>
        <div className="mt-5 lg:mt-0 button flex lg:flex-col gap-4 items-center lg:justify-center">
          <Link to={`/updatedata/${_id}`}>
            <button className=" btn btn-warning">
              <MdMovieEdit className=" text-xl" /> Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className=" btn btn-error text-white">
            <MdDelete className=" text-xl" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleCard;
