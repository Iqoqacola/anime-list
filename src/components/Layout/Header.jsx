import { useRef } from "react";
import Logo from "../Elements/Logo";
import Menu from "../Elements/Menu";
import FindAnime from "../Fragments/FindAnime";
import { HamburgerMenu } from "../Fragments/HamburgerMenu";

const Header = ({ inputRef, handleSubmit, handleSort }) => {
  const hamburgerRef = useRef(null);

  const handleClickHamburger = (event) => {
    const arrayClass = Array.from(event.target.classList);

    if (
      arrayClass.filter((item) => item.includes("hamburger-active")) ==
      "hamburger-active"
    ) {
      event.target.classList.remove("hamburger-active");
      // navbar.classList.toggle("hidden");
    } else {
      event.target.classList.add("hamburger-active");
      // navbar.classList.remove("hidden");
    }
  };
  return (
    <header className="bg-primary absolute p-2 top-0 left-0 right-0">
      <div className="flex justify-between items-center md:hidden">
        <HamburgerMenu
          hamburgerRef={hamburgerRef}
          handleClickHamburger={handleClickHamburger}
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
