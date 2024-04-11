import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import userDefaultPic from "../../../assets/user.png";
const Navbar = () => {
  const navLink = (
    <>
      <li className="sm:w-full">
        <NavLink className={"p-4 nav-item"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"p-4 nav-item"} to="/">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={"p-4 nav-item"} to="/">
          Career
        </NavLink>
      </li>
    </>
  );
  const tooglBtn = () => {
    const selectMenu = document.getElementById("toogleBtn");
    selectMenu.classList.toggle("active");
  };
  return (
    <div className="py-5">
      <nav className="flex lg:flex-row justify-between items-center relative">
        <div className="blank-nav ">
          <div className="lg:hidden">
            <button onClick={tooglBtn}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className="center-nav  absolute lg:static left-0 top-0">
          <ul id="toogleBtn" className="flex flex-col lg:flex-row toogle-btn">
            {navLink}
          </ul>
        </div>
        <div className="right-nav flex gap-4 items-center">
          <div className="user-icon">
            <img src={userDefaultPic} alt="" />
          </div>
          <button className="btn login-btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
