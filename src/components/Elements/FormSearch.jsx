const FormSearch = ({ handleSubmit, handleHamburger }) => {
  return (
    <form action="/submit" onSubmit={handleSubmit} className="ml-4">
      <input
        type="search"
        placeholder="Search Anime"
        className="p-4 mx-4 rounded-lg md:text-base lg:text-lg w-32 md:w-60"
        name="anime"
      />
      <button onClick={handleHamburger} type="submit" className="bg-blue-50 p-4 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default FormSearch;
