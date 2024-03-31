import ListMenu from "./ListMenu";

const Menu = ({ handleSort, phone, handleClickHamburger }) => {
  return (
    <>
      <nav id="nav-menu" className="">
        <ul className={`flex gap-4 gap-y-4 lg:gap-10 ${phone ? "flex-col items-center" : ""}`}>
          <ListMenu
            dataSort="POPULARITY_DESC"
            handleSort={handleSort}
            handleClickHamburger={handleClickHamburger}
          >
            POPULAR
          </ListMenu>
          <ListMenu
            dataSort="UPDATED_AT_DESC"
            handleSort={handleSort}
            handleClickHamburger={handleClickHamburger}
          >
            LATEST
          </ListMenu>
          <ListMenu
            dataSort="TRENDING_DESC"
            handleSort={handleSort}
            handleClickHamburger={handleClickHamburger}
          >
            TRENDING
          </ListMenu>
          <ListMenu
            dataSort="FAVOURITES_DESC"
            handleSort={handleSort}
            handleClickHamburger={handleClickHamburger}
          >
            FAVORITE
          </ListMenu>
          <ListMenu
            dataSort="SCORE_DESC"
            handleSort={handleSort}
            handleClickHamburger={handleClickHamburger}
          >
            TOP LIST
          </ListMenu>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
