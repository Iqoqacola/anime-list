const Card = ({ image, title, desc, genre, eps }) => {
  return (
    <>
      <div className="flex flex-col bg-primary rounded-lg w-[190px] h-[470px] shadow-xl p-4">
        <div className="container h-full">
          <img
            className="flex justify-center w-[170px] h-[225px]"
            src={image}
            alt={title}
          />
          <h2 className="text-xl font-semibold my-2">{title}</h2>
          <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: desc }}></p>
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
        <button className="w-1/2 text-large font-semibold m-2 bg-secondary text-black flex p-2 rounded-md">Detail</button>
      </div>
    </>
  );
};

export default Card;
