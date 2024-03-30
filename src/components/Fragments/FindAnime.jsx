const FindAnime = ({handleSubmit, inputRef}) => {

  return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="search" placeholder="Search Anime" className="p-4 mx-4 rounded-lg text-large"/>
        <button type="submit" className="bg-blue-50 p-4 rounded-lg">Search</button>
      </form>
  );
};

export default FindAnime;
