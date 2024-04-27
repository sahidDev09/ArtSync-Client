import { FaImage } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddArts = () => {
  const { user } = useContext(AuthContext);

  const handleAddData = (e) => {
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
    const email = form.email.value;
    const username = form.username.value;

    if (scustom === "Customization") {
      toast.error("Please select a customization option Yes or No.");
      return;
    }
    if (stock === "Availablity") {
      toast.error("Please select any value from Availablity option");
      return;
    }
    if (subcategory_name === "Subcategory") {
      toast.error("Please select any value from Subcategory option");
      return;
    }
    if (rating > 5) {
      toast.error("Maximum rating limit is 5");
      return;
    }

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
      email,
      username,
    };

    //add data to the mongodb

    fetch("http://localhost:4000/mycrafts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added",
            text: "New data added successfully!",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="addarts-container container mx-auto bg-blue-50 md:p-14 p-5 my-10 rounded-md">
        <h1 className=" text-3xl text-center mb-7">
          Add New Art & Craft items
        </h1>
        <form onSubmit={handleAddData} className=" grid md:grid-cols-2 gap-4">
          <div className=" flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaImage className=" text-gray-600"></FaImage>
              <input
                name="photo"
                type="url"
                className="grow"
                required
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
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <TbCategory2></TbCategory2>
              <select name="subcategory_Name" className=" w-full">
                <option disabled selected>
                  Subcategory
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
                  Customization
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
                placeholder="Processing Time"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <AiOutlineStock></AiOutlineStock>
              <select name="stock" className=" w-full">
                <option disabled selected>
                  Availablity
                </option>
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <MdOutlineAttachEmail></MdOutlineAttachEmail>
              <input
                name="email"
                type="email"
                className="grow"
                required
                readOnly={true}
                value={user.email}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <FaRegUser></FaRegUser>
              <input
                name="username"
                type="text"
                className="grow"
                required
                readOnly={true}
                value={user.displayName}
              />
            </label>
            <label className="btn bg-green-500 input input-bordered flex items-center gap-2">
              <input
                className=" text-white font-semibold border-none"
                type="submit"
                value="Add"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArts;
