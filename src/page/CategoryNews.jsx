import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then((res) => res.json())
    .then(data => console.log(data.data))
  },[])

  const datas = useLoaderData()
  console.log(datas);

  return <div>CategoryNews dsafas</div>;
};

export default CategoryNews;
