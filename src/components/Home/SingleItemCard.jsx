import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleItemCard = ({ cardinfo }) => {
  console.log(cardinfo);

  const { _id, image, item_name, subcategory_name, price } = cardinfo;

  return (
    <div className=" bg-base-200 p-4 rounded-md hover:border hover:border-blue-300 transition-all">
      <img
        className=" h-52 w-full object-cover rounded-md mb-4"
        src={image}
        alt=""
      />
      <div className="content flex flex-col gap-2">
        <h1 className=" font-bold">{item_name}</h1>
        <p className=" bg-green-200 text-green-700 w-fit p-1 px-2 rounded-full">
          {subcategory_name}
        </p>
        <div className=" flex justify-between">
          <h1 className=" text-xl text-orange-500 font-bold">${price}</h1>
          <Link to={`/mycraft/${_id}`}>
            <button className=" btn bg-green-500 text-white btn-md rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItemCard;
