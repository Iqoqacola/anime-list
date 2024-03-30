import { useEffect, useRef, useState } from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import getData from "./components/services/graph.service";

export default function App() {
  const [aniList, setAniList] = useState();
  const [variable, setVariable] = useState({ sort: "END_DATE" });
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = inputRef.current.value.toLowerCase();
    const searchAnime = {
      search: data,
      sort: 'TRENDING_DESC'
    };
    // POPULARITY_DESC
    // UPDATED_AT_DESC
    // FAVOURITES_DESC
    // SCORE_DESC
    // TRENDING_DESC
    data == ""
      ? setVariable({ sort: "END_DATE" })
      : setVariable(searchAnime);
  };

  useEffect(() => {
    getData(variable).then((response) => setAniList(response));
  }, [variable]);

  return (
    <>
      <Header inputRef={inputRef} handleSubmit={handleSubmit}></Header>
      <Hero aniList={aniList} sort={variable.search?.toUpperCase()}></Hero>
    </>
  );
}
