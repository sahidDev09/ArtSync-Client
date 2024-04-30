import { useEffect, useState } from "react";
import SingleItemCard from "./SingleItemCard";

const ItemCards = () => {
  const [cardItems, setCarditems] = useState([]);

  useEffect(() => {
    fetch("https://art-sync-server.vercel.app/mycrafts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarditems(data);
      });
  }, []);

  return (
    <div className=" container mx-auto">
      <h1 className=" text-3xl font-semibold text-center my-8">
        Featured items
      </h1>

      <div className=" grid lg:grid-cols-3 gap-4">
        {cardItems.slice(0, 6).map((card, index) => (
          <SingleItemCard key={index} cardinfo={card}></SingleItemCard>
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
