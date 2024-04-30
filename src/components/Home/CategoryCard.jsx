/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const { image, subcategory_name } = category;

  return (
    <div className="hero shadow-xl border border-blue-400 rounded-md"
      style={{
        backgroundImage: `url(${image})`,
      }}>
        <div className="hero-overlay bg-opacity-70"></div>
      <h1 className=" text-2xl font-bold p-5 text-center text-white">{subcategory_name}</h1>
    </div>
  );
};

export default CategoryCard;
