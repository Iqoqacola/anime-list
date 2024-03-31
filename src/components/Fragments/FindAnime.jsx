const FindAnime = ({ handleSubmit, inputRef, handleClickHamburger }) => {
  return (
    <form onSubmit={handleSubmit} className="ml-4">
      <input
        ref={inputRef}
        type="search"
        placeholder="Search Anime"
        className="p-4 mx-4 rounded-lg md:text-base lg:text-lg w-60"
      />
      <div className="w-fit h-fit inline-block" onClick={handleClickHamburger}>
        <button type="submit" className="bg-blue-50 p-4 rounded-lg">
          Search
        </button>
      </div>{" "}
    </form>
  );
};

export default FindAnime;
