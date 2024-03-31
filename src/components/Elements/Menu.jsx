import ListMenu from "./ListMenu";

const Menu = ({ handleSort }) => {
  return (
    <>
      <nav id="nav-menu" className="">
        <ul className="flex gap-4 lg:gap-10">
          <ListMenu dataSort="POPULARITY_DESC" handleSort={handleSort}>
            POPULAR
          </ListMenu>
          <ListMenu dataSort="UPDATED_AT_DESC" handleSort={handleSort}>
            LATEST
          </ListMenu>
          <ListMenu dataSort="TRENDING_DESC" handleSort={handleSort}>
            TRENDING
          </ListMenu>
          <ListMenu dataSort="FAVOURITES_DESC" handleSort={handleSort}>
            FAVORITE
          </ListMenu>
          <ListMenu dataSort="SCORE_DESC" handleSort={handleSort}>
            TOP LIST
          </ListMenu>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
