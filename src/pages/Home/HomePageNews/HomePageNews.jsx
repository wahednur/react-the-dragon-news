import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";

const HomePageNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      {news.map((hNews) => (
        <NewsCard key={hNews._id} news={hNews}></NewsCard>
      ))}
    </div>
  );
};

export default HomePageNews;
