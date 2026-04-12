import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import RightAside from "../RightAside/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [news, setNews] = useState({});

  useEffect(() => {
    const filterNews = data.find((news) => news.id == id);
    setNews(filterNews);
  }, [id, data]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 max-w-11/12 mx-auto py-8">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
