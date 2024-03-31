import { useState } from "react";
import Menu from "../Elements/Menu";
import FindAnime from "./FindAnime";

export const HamburgerMenu = ({ handleSort, inputRef, handleSubmit }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const handleClickHamburger = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <div>
      <button
        id="hamburger"
        type="button"
        className={`block md:hidden ml-10 ${
          hamburgerActive ? "hamburger-active" : ""
        }`}
        onClick={handleClickHamburger}
      >
        <span className="hamburger-line hamburger-transition origin-top-left"></span>
        <span className="hamburger-line hamburger-transition"></span>
        <span className="hamburger-line hamburger-transition origin-bottom-left"></span>
      </button>
      <div
        className={`fixed left-2 right-2 top-16 bottom-40 z-10 bg-primary rounded-md ${
          !hamburgerActive ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-10 mt-10">
          <FindAnime
            handleClickHamburger={handleClickHamburger}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
          ></FindAnime>

          <Menu
            handleClickHamburger={handleClickHamburger}
            handleSort={handleSort}
            phone={true}
          ></Menu>
        </div>
      </div>
    </div>
  );
};
