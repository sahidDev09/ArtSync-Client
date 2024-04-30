import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ItemTable from "./ItemTable";

const ArtsCrafts = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://art-sync-server.vercel.app/mycrafts")
      .then((res) => res.json())
      .then((data) => {
        setAllCrafts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArtSync | All items</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center my-5">All Arts & Crafts</h1>

      {loading ? (
        <div className="text-center my-5 h-[500px] flex justify-center">
          <span className="loading loading-spinner loading-5xl scale-150"></span>
        </div>
      ) : allCrafts.length === 0 ? (
        <div className=" flex justify-center items-center">
          <img src="https://i.ibb.co/rtcYN6n/nodatafound.png" alt="" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Item Name</th>
                <th>User</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allCrafts.map((craft, index) => (
                <ItemTable key={index} craft={craft} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ArtsCrafts;
