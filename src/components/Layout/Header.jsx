import Logo from "../Elements/Logo";
import Menu from "../Elements/Menu";
import FindAnime from "../Fragments/FindAnime";
import { HamburgerMenu } from "../Fragments/HamburgerMenu";

const Header = ({ inputRef, handleSubmit, handleSort }) => {
  return (
    <div className="bg-primary absolute p-2 top-0 left-0 right-0">
      <div className="flex bg-primary top-0 left-0 right-0 justify-between items-center fixed z-10 md:hidden">
        <HamburgerMenu
          handleSort={handleSort}
          inputRef={inputRef}
          handleSubmit={handleSubmit}
        ></HamburgerMenu>
        <Logo responsive="flex scale-75"></Logo>
      </div>
      <div className="md:flex items-center md:justify-between px-12 justify-center hidden">
        <Logo responsive="hidden" />
        <Menu handleSort={handleSort} />
        <FindAnime inputRef={inputRef} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Header;
