import AnimeCard from "../Fragments/AnimeCard";

const Hero = ({ aniList, sort }) => {
  return (
    <div className="mt-36">
      <AnimeCard aniList={aniList} sort={sort}></AnimeCard>
    </div>
  );
};

export default Hero;
