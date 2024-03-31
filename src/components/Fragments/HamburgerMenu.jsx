export const HamburgerMenu = ({ref, handleClickHamburger}) => {
  return (
    <button
      id="hamburger"
      type="button"
      className="block md:hidden ml-10"
      ref={ref}
      onClick={handleClickHamburger}
    >
      <span className="hamburger-line hamburger-transition origin-top-left"></span>
      <span className="hamburger-line hamburger-transition"></span>
      <span className="hamburger-line hamburger-transition origin-bottom-left"></span>
    </button>
  );
};
