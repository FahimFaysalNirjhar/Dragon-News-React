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
        <Header />
      </header>
      <main className="max-w-11/12 mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <section className="md:col-span-9">
            <NewsDetailsCard news={news} />
          </section>
          <aside className="md:col-span-3">
            <RightAside />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
