/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ItemTable = ({ craft }) => {
  const { _id, image, item_name, price, subcategory_name, username, email } =
    craft;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle md:w-12 md:h-12 h-10 w-10">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="md:font-semibold text-sm md:text-md">
        {item_name} <br />{" "}
        <span className=" text-gray-400 font-normal hidden md:inline">
          {subcategory_name}
        </span>
      </td>
      <td className=" hidden md:inline-table">
        <span className=" text-gray-400">{username}</span>
        <br />
        {email}
      </td>
      <td>
        <span className=" bg-green-100 px-4 rounded-full py-2 text-green-700">
          ${price}
        </span>
      </td>
      <td>
        <Link to={`/mycraft/${_id}`}>
          <button className="btn btn-sm btn-success text-white">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ItemTable;
