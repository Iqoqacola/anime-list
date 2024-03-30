const Menu = () => {
  return (
    <>
      <nav id="nav-menu" className="">
        <ul className="flex gap-10">
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black hover:text-tersier transition duration-300 ease-in-out"
            >
              POPULAR
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black hover:text-tersier transition duration-300 ease-in-out"
            >
              LATEST
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black hover:text-tersier transition duration-300 ease-in-out"
            >
              TRENDING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black hover:text-tersier transition duration-300 ease-in-out"
            >
              FAVORITE
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black hover:text-tersier transition duration-300 ease-in-out"
            >
              SCORE
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
