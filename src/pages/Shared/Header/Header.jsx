import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto sm:w-full md:w-[471px]" src={logo} alt="" />

      <p className="header-desc">Journalism Without Fear or Favour</p>
      <p className="header-date">
        <span>{moment().format("dddd,")}</span>{" "}
        {moment().format("MMMM DD, YYYY")}
      </p>
    </div>
  );
};

export default Header;
