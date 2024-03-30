import Card from "./Card";

const AnimeCard = ({ aniList, sort = "ANIME" }) => {
  return (
    <>
      <h1 className="text-3xl font-medium pl-24 mb-2">{sort}</h1>
      <div className="flex flex-wrap justify-center gap-10 gap-x-16 mt-4">
        {aniList?.map((item) => (
          <Card
            key={item.id}
            image={item.coverImage.large}
            title={
              item.title.english?.length > 35 || item.title.english
                ? item.title.english?.substring(0, 35) + " ..."
                : item.title.romaji
            }
            desc={
              item.description?.length > 75
                ? item.description.substring(0, 75) + " ..."
                : item.description
            }
            genre={
              item.genres?.length > 1
                ? item.genres[0] + ", " + item.genres[1]
                : item.genres
            }
            eps={item.episodes}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default AnimeCard;
