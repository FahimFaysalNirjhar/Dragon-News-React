import React, { use } from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = Marquee.default || Marquee;

const headlinePromise = fetch(
  "https://raw.githubusercontent.com/FahimFaysalNirjhar/news-data/refs/heads/main/news.json",
).then((res) => res.json());

const LatestNews = () => {
  const headlines = use(headlinePromise);
  return (
    <div className="flex items-center gap-4 bg-base-200 py-2 overflow-hidden max-w-11/12 mx-auto p-3 my-8">
      <p className="text-sm font-semibold bg-secondary text-white px-4 py-2 whitespace-nowrap">
        Latest
      </p>
      <MarqueeComponent pauseOnHover speed={60}>
        {headlines.map((headline, index) => (
          <p key={index} className="mx-6 text-sm whitespace-nowrap">
            {headline.title}
          </p>
        ))}
      </MarqueeComponent>
    </div>
  );
};

export default LatestNews;
