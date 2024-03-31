const ListMenu = ({ children, handleSort, dataSort }) => {
  return (
    <li
      data-sort={dataSort}
      onClick={handleSort}
      className="text-2xl font-semibold text-black hover:text-tersier cursor-pointer transition duration-300 ease-in-out"
    >
      {children}
    </li>
  );
};

export default ListMenu;
