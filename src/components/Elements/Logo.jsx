const Logo = ({responsive}) => {
  return (
    <div className={`items-center ${responsive} lg:flex`}>
      <img src="icon.png" width="60px" alt="" />
      <h2 className="ml-4 font-bold text-3xl">Aniverse</h2>
    </div>
  );
};

export default Logo;