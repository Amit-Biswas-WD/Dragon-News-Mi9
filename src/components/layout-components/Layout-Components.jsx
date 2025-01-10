import { useEffect, useState } from "react";

const LayoutComponents = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="text-20 font-semibold">
        All Category ({categories.length})
      </h2>
      <div className="flex flex-col gap-4 my-4">
        {categories.map((category) => (
          <button
            className="btn bg-base-100 border-none"
            key={category.category_id}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayoutComponents;
