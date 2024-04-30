import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("https://art-sync-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-3xl font-semibold text-center my-5">
        Arts & Crafts Category
      </h1>
      <div className=" grid md:grid-cols-3 gap-4 container mx-auto">
        {cat.map((catg, index) => (
          <CategoryCard key={index} category={catg}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
