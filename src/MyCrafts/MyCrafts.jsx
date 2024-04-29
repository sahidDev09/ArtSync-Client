import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MySingleCard from "./MySingleCard";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [mydata, setMydata] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://art-sync-server.vercel.app/mycrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMydata(data);
      });
  }, [user, control]);

  //code for sort functionality

  const sortByYes = () => {
    const sortedData = [...mydata].sort((a, b) => {
      if (a.scustom === "Yes" && b.scustom === "No") {
        return -1;
      } else if (a.scustom === "No" && b.scustom === "Yes") {
        return 1;
      } else {
        return 0;
      }
    });
    setMydata(sortedData);
  };

  const sortByNo = () => {
    const sortedData = [...mydata].sort((a, b) => {
      if (a.scustom === "No" && b.scustom === "Yes") {
        return -1;
      } else if (a.scustom === "Yes" && b.scustom === "No") {
        return 1;
      } else {
        return 0;
      }
    });
    setMydata(sortedData);
  };

  return (
    <div className=" container mx-auto min-h-screen">
      <h1 className=" text-xl mt-5 font-bold text-blue-500 text-center">
        My Total Crafts :{mydata.length}
      </h1>

      {/* sort design */}

      <div className="bg-green-600 text-white w-28 mt-5 mx-auto rounded-full justify-center hidden lg:flex border">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Sort by</summary>
              <ul className="w-44">
                <li className="text-black">
                  <button onClick={sortByYes}>Yes</button>
                </li>
                <li className="text-black">
                  <button onClick={sortByNo}>No</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* end of sort */}

      <div className=" grid md:grid-cols-2 gap-5 my-10">
        {mydata.map((mcard, index) => (
          <MySingleCard
            key={index}
            control={control}
            setControl={setControl}
            cardData={mcard}></MySingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyCrafts;
