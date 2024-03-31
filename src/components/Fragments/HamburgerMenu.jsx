import { useState } from "react";

export const HamburgerMenu = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleClickHamburger = () => {
    setHamburgerActive(!hamburgerActive)
  };
  return (
    <button
      id="hamburger"
      type="button"
      className={`block md:hidden ml-10 ${hamburgerActive ? 'hamburger-active' : ''}`}
      onClick={handleClickHamburger}
    >
      <span className="hamburger-line hamburger-transition origin-top-left"></span>
      <span className="hamburger-line hamburger-transition"></span>
      <span className="hamburger-line hamburger-transition origin-bottom-left"></span>
    </button>
  );
};
