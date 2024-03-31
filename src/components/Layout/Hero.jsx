import AnimeCard from "../Fragments/AnimeCard";

const Hero = ({ aniList, sort = "ANIME LIST" }) => {
  return (
    <div className="sm:mt-14 md:mt-36 mb mb-20">
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium pl-24 mb-8">{sort}</h1>
      <AnimeCard aniList={aniList} sort={sort}></AnimeCard>
    </div>
  );
};

export default Hero;
