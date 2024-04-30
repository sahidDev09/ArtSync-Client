import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {


    const category = useLoaderData()

  return (
    <div className=" min-h-screen">
      <h1 className=" text-2x font-bold text-center">Specific category card</h1>
    </div>
  );
};

export default SingleCategory;
