/* eslint-disable react/prop-types */
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Star = ({ stars }) => {
  const ratingNum = Array.from({ length: 5 }, (_, index) => index + 0.5);

  return (
    <div className="flex">
      {ratingNum.map((index) => (
        <span className="text-orange-400" key={index}>
          {stars >= index + 1 ? (
            <IoIosStar />
          ) : stars >= index ? (
            <IoIosStarHalf />
          ) : (
            <IoIosStarOutline />
          )}
        </span>
      ))}
    </div>
  );
};

export default Star;
