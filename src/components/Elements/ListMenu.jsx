const ListMenu = ({ children, handleSort, dataSort, handleClickHamburger }) => {
  return (
    <div className="w-fit h-fit" onClick={handleClickHamburger}>
      <li
        data-sort={dataSort}
        onClick={handleSort}
        className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-black hover:text-white cursor-pointer transition duration-300 ease-in-out"
      >
        {children}
      </li>
    </div>
  );
};

export default ListMenu;
