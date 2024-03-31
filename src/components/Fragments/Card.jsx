const Card = ({ image, title, desc, genre, eps }) => {
  return (
    <>
      <div className="cursor-pointer flex flex-col bg-primary rounded-lg w-[160px] md:w-[190px] lg:h-[395px] md:h-[450px] shadow-xl p-4 hover:scale-105 hover:opacity-85 transition duration-300 ease-in-out">
        <div className="container h-full">
          <img
            className="flex justify-center w-[170px] h-[225px]"
            src={image}
            alt={title}
          />
          <h2 className="text-xl font-semibold my-2">{title}</h2>
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </div>

        <div className="h-full">
          <span className="text-gray-500 text-sm">
            <strong className="pr-2">Episodes:</strong> {eps}
          </span>
          <span className="text-gray-500 text-sm flex flex-wrap">
            <strong className="pr-8">Genre:</strong>
            <span className="flex flex-wrap w-1/2">{genre}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
