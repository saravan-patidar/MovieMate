import Logo from "../images/netflixlogo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 z-20 ">
      <img src={Logo} alt="logo" className="shadow-2xl" />
    </div>
  );
};

export default Header;
