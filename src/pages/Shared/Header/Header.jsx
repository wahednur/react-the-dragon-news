import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />

      <p className="header-desc">Journalism Without Fear or Favour</p>
      <p className="header-date">
        <span>Sunday,</span> November 27, 2022
      </p>
    </div>
  );
};

export default Header;
