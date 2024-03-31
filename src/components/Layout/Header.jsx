import Logo from "../Elements/Logo";
import Menu from "../Elements/Menu";
import FindAnime from "../Fragments/FindAnime";
import { HamburgerMenu } from "../Fragments/HamburgerMenu";

const Header = ({ inputRef, handleSubmit, handleSort }) => {

  return (
    <header className="bg-primary absolute p-2 top-0 left-0 right-0">
      <div className="flex justify-between items-center md:hidden">
        <HamburgerMenu
        ></HamburgerMenu>
        <Logo responsive="flex scale-75"></Logo>
      </div>
      <div className="md:flex items-center md:justify-between px-12 justify-center hidden">
        <Logo responsive="hidden" />
        <Menu handleSort={handleSort} />
        <FindAnime inputRef={inputRef} handleSubmit={handleSubmit} />
      </div>
    </header>
  );
};

export default Header;
