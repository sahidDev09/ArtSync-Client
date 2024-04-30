import { Link, useLoaderData } from "react-router-dom";
import Star from "../MyCrafts/Star";

const CardDetails = () => {
  const details = useLoaderData();
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    rating,
    price,
    scustom,
    process_time,
    stock,
    email,
    username,
  } = details;

  return (
    <div className=" container mx-auto">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className=" flex flex-col gap-1 ">
          <h1 className=" text-5xl font-bold text-white uppercase">
            {item_name}
          </h1>
          <span className=" flex gap-1 items-center text-xl text-gray-400">
            Rating: <Star stars={rating}></Star>
          </span>
          <h3 className=" text-gray-400">
            Seller name: <span className=" text-blue-400">{username}</span>{" "}
          </h3>

          <h3 className=" text-gray-400">
            Seller Eamil: <span className=" text-blue-100">{email}</span>{" "}
          </h3>

          <h3 className=" text-gray-400 font-semibold">
            Subcategory name:
            <span className=" text-blue-100 font-normal">
              {subcategory_name}
            </span>
          </h3>
          <h3 className=" text-gray-400 font-semibold w-96">
            Short Description:
            <span className=" text-blue-100 font-normal">
              {short_description}
            </span>
          </h3>
          <h3 className=" text-gray-400 font-semibold">
            Customization:
            <span className=" text-blue-100 font-normal">{scustom}</span>
          </h3>
          <h3 className=" text-gray-400 font-semibold">
            Processing Time:
            <span className=" text-blue-100 font-normal">{process_time}</span>
          </h3>
          <h3 className=" text-gray-400 font-semibold">
            Processing Time:
            <span className=" text-blue-100 font-normal">{process_time}</span>
          </h3>
          <h3 className=" text-gray-400 font-semibold">
            Availability:
            <span className=" text-blue-100 font-normal">{stock}</span>
          </h3>
          <h1 className=" text-3xl font-bold text-orange-600">${price}</h1>
          <Link to="/"><button className=" btn btn-md my-5 btn-error">Go To home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
