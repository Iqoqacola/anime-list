const Card = ({ image, title, desc, genre, eps, id, handleModal }) => {
  return (
    <>
      <div
        data-id={id}
        className="cursor-pointer flex flex-col bg-primary rounded-lg w-[160px] md:w-[190px] h-[500px] shadow-xl p-4 hover:scale-105 hover:opacity-85 transition duration-300 ease-in-out"
        onClick={handleModal}
      >
        <div className="container h-full" data-id={id}>
          <img
            className="flex justify-center w-[170px] h-[225px]"
            src={image}
            alt={title}
            data-id={id}
          />
          <h2 className="text-xl font-semibold my-2" data-id={id}>
            {title}
          </h2>
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: desc }}
            data-id={id}
          ></p>
        </div>

        <div className="h-full" data-id={id}>
          <span className="text-gray-500 text-sm" data-id={id}>
            <strong className="pr-2">Episodes:</strong> {eps}
          </span>
          <span className="text-gray-500 text-sm flex flex-wrap" data-id={id}>
            <strong className="pr-8">Genre:</strong>
            <span className="flex flex-wrap w-1/2">{genre}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
