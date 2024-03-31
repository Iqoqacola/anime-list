import Logo from "../Elements/Logo";
import Menu from "../Elements/Menu";
import FindAnime from "../Fragments/FindAnime";

const Header = ({ inputRef, handleSubmit, handleSort }) => {
  return (
    <header className="bg-primary absolute p-2 top-0 left-0 right-0">
      <div className="flex items-center md:justify-between px-12 justify-center">
        <Logo />
        <Menu handleSort={handleSort} />
        <div className="hidden md:flex">
          <FindAnime inputRef={inputRef} handleSubmit={handleSubmit} />
        </div>
      </div>
    </header>
  );
};

export default Header;
