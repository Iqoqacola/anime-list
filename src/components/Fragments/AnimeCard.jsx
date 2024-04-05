import { useEffect, useState } from "react";
import Card from "./Card";
import { AnimeDetail } from "./AnimeDetail";
import getDetailAnime from "../services/detail.service";

const AnimeCard = ({ aniList }) => {
  const [modal, setModal] = useState(false);
  const [detailAnime, setDetailAnime] = useState();
  const [idAnime, setIdAnime] = useState({});

  const handleModal = (e) => {
    setModal(!modal);
    const id = e.target.getAttribute("data-id");
    const idAnime = {
      id: id,
    };
    setIdAnime(idAnime);
  };

  useEffect(() => {
    getDetailAnime(idAnime)
      .then((response) => setDetailAnime(response[0]));
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [idAnime, modal]);

  return (
    <>
      <AnimeDetail
        title={
          detailAnime?.title.english ||
          detailAnime?.title.romaji ||
          detailAnime?.title.native
        }
        desc={detailAnime?.description}
        image={detailAnime?.coverImage.large}
        eps={detailAnime?.episodes == null ? "-" : detailAnime?.episodes}
        modal={modal}
        handleModal={handleModal}
        score={detailAnime?.averageScore + "/100"}
        genres={detailAnime?.genres.map((item) => item + ", ")}
        release={`${detailAnime?.startDate.day} - ${detailAnime?.startDate.month} - ${detailAnime?.startDate.year}`}
        format={detailAnime?.format}
      ></AnimeDetail>
      <div className="flex flex-wrap justify-center gap-y-10 gap-4 md:gap-10 md:gap-x-16 mt-4">
        {aniList?.map((item) => (
          <Card
            handleModal={handleModal}
            id={item.id}
            key={item.id}
            image={item.coverImage.large}
            title={
              item.title.english?.length > 30
                ? item.title.english?.substring(0, 30) + " ..."
                : item.title.english ||
                  item.title.romaji.substring(0, 30) ||
                  item.title.native
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
            eps={item.episodes == null ? "-" : item.episodes}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default AnimeCard;
