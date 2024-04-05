import { useEffect, useRef, useState } from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import getData from "./components/services/graph.service";
import { AnimeDetail } from "./components/Fragments/AnimeDetail";

export default function App() {
  const [aniList, setAniList] = useState();
  const [variable, setVariable] = useState({ sort: "END_DATE" });
  const [sortView, setSortView] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.anime.value.toLowerCase();
    const searchAnime = {
      search: data,
      sort: "TRENDING_DESC",
    };
    setTimeout(() => {
      data == "" ? setVariable({ sort: "END_DATE" }) : setVariable(searchAnime);
      data == "" ? setSortView("ANIME LIST") : setSortView(data.toUpperCase());
    }, 200);
  };

  const handleSort = (e) => {
    const value = e.target.getAttribute("data-sort");
    const sort = {
      sort: value,
    };
    setVariable(sort);
    setSortView(e.target.textContent.toUpperCase());
  };

  useEffect(() => {
    getData(variable).then((response) => setAniList(response));
  }, [variable]);

  return (
    <>
      <Header handleSubmit={handleSubmit} handleSort={handleSort}></Header>
      <Hero aniList={aniList} sort={sortView}></Hero>
    </>
  );
}
