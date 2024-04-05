export const AnimeDetail = ({
  modal,
  handleModal,
  title,
  desc,
  image,
  eps,
  score,
  genres,
  release,
  format,
}) => {
  return (
    <>
      {modal && (
        <div className="overflow-y-hidden fixed top-0 right-0 left-0 z-50 w-full h-full">
          <div className="overlay flex justify-center items-center p-10 lg:p-80 w-screen h-screen">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg shadow bg-gray-700 md:w-full md:h-auto">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-start p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <div className="p-4 md:p-5 space-y-4 flex items-center justify-between gap-2 md:gap-10">
                <img src={image} alt={title} className="md:w-auto md:h-auto h-40"></img>
                <div className="overflow-auto md:w-auto md:h-[70vh] h-56">
                  <p
                    className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  ></p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong className="pr-2">Format:</strong> {format}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong className="pr-2">Episodes:</strong> {eps}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong className="pr-2">Genres:</strong> {genres}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong className="pr-2">Release:</strong> {release}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong className="pr-2">Score:</strong> {score}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center p-4 md:p-5 border-t rounded-b border-gray-600">
                <button
                  type="button"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  onClick={handleModal}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
