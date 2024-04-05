import AnimeCard from "../Fragments/AnimeCard";

const Hero = ({ aniList, sort = "ANIME LIST", handleModal }) => {
  return (
    <div className="mt-24 md:mt-36 mb-20">
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-medium pl-24 sm:md-4 md:mb-8">{sort}</h1>
      <AnimeCard handleModal={handleModal} aniList={aniList} sort={sort}></AnimeCard>
    </div>
  );
};

export default Hero;
