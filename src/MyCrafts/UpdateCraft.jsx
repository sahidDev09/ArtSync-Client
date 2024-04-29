import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaImage } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const [upCraft, setUpCraft] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/updatecraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpCraft(data);
      });
  }, [id]);

  const {
    subcategory_name,
    image,
    item_name,
    short_description,
    scustom,
    price,
    rating,
    stock,
    process_time,
  } = upCraft;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.photo.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_Name.value;
    const short_description = form.short_description.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const scustom = form.scustom.value;
    const process_time = form.process_time.value;
    const stock = form.stock.value;

    const addInfo = {
      image,
      item_name,
      subcategory_name,
      short_description,
      rating,
      price,
      scustom,
      process_time,
      stock,
    };

    fetch(`http://localhost:4000/updatecraft/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Info",
            text: "Data Updated successfully!",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="md:min-h-screen">
      <div className=" container mx-auto bg-yellow-50 md:p-14 p-5 my-10 rounded-md">
        <h1 className=" text-3xl text-center mb-7">Update Art & Craft items</h1>
        <form onSubmit={handleUpdate} className=" grid md:grid-cols-2 gap-4">
          <div className=" flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaImage className=" text-gray-600"></FaImage>
              <input
                name="photo"
                type="url"
                className="grow"
                required
                defaultValue={image}
                placeholder="Image URL"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
              <input
                name="item_name"
                type="text"
                className="grow"
                required
                defaultValue={item_name}
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <TbCategory2></TbCategory2>
              <select name="subcategory_Name" className=" w-full">
                <option disabled selected>
                  {subcategory_name}
                </option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <MdOutlineDescription></MdOutlineDescription>
              <input
                name="short_description"
                type="text"
                className="grow"
                required
                defaultValue={short_description}
                placeholder="Description"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <FaRegStar></FaRegStar>
              <input
                name="rating"
                type="number"
                className="grow"
                required
                defaultValue={rating}
                placeholder="Rating"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPricetagOutline></IoPricetagOutline>
              <input
                name="price"
                type="number"
                className="grow"
                required
                defaultValue={price}
                placeholder="Price"
              />
            </label>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <MdMovieEdit></MdMovieEdit>
              <select name="scustom" className=" w-full">
                <option disabled selected>
                  {scustom}
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoTimerOutline></IoTimerOutline>
              <input
                name="process_time"
                type="text"
                className="grow"
                required
                defaultValue={process_time}
                placeholder="Processing Time"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <AiOutlineStock></AiOutlineStock>
              <select name="stock" className=" w-full">
                <option disabled selected>
                  {stock}
                </option>
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
            </label>

            <label className="btn bg-green-500 input input-bordered flex items-center gap-2">
              <input
                className=" text-white font-semibold border-none"
                type="submit"
                value="Update Craft"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;
