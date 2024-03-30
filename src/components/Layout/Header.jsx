import Logo from "../Elements/Logo";
import Menu from "../Elements/Menu";
import FindAnime from "../Fragments/FindAnime";

const Header = ({ inputRef, handleSubmit }) => {
  return (
    <header className="bg-primary absolute p-2 top-0 left-0 right-0">
      <div className="flex items-center justify-between px-12">
        <Logo />
        <Menu />
        <FindAnime inputRef={inputRef} handleSubmit={handleSubmit} />
      </div>
    </header>
  );
};

export default Header;
