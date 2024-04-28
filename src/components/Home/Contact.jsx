import { FaRegFileArchive } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" container mx-auto grid md:grid-cols-2">
      <div className="content flex flex-col gap-7">
        <h1 className=" text-3xl font-bold">Make us smooth!</h1>
        <span className=" flex items-center gap-2">
          Email : <p className=" text-green-700">artsyncofficial@gmail.com</p>
        </span>
        <div className=" flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className=" textarea  input-bordered flex items-center gap-2">
            <textarea
              className=" w-full bg-transparent"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your valuable message here"></textarea>
          </label>
        </div>
        <div className="button flex items-center gap-3">
          <button className="flex items-center btn bg-green-500 text-white gap-2 rounded-full">
            <FaRegFileArchive></FaRegFileArchive>
            File attached
          </button>
          <button className="flex items-center btn bg-green-500 text-white gap-2 rounded-full">
            Submit attachment
          </button>
        </div>
      </div>
      <div className="lottie"></div>
    </div>
  );
};

export default Contact;
