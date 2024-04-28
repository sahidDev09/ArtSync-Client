import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MySingleCard from "./MySingleCard";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [mydata, setMydata] = useState([]);

  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:4000/mycrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMydata(data);
      });
  }, [user]);

  return (
    <div className=" container mx-auto">
      <h1 className=" text-xl mt-5 font-bold text-blue-500 text-center">
        My Total Crafts :{mydata.length}
      </h1>
      <div className=" grid md:grid-cols-2 gap-5 my-10">
        {mydata.map((mcard, index) => (
          <MySingleCard key={index} cardData={mcard}></MySingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyCrafts;
