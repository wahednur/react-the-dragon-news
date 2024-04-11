import { FaFacebookF, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const RightSideNav = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Login With</h1>
      <div className="flex flex-col">
        <button className="btn-control">
          <FaGoogle />
          Login with google
        </button>
        <button className="btn-control">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="find-on-us mt-[22px]">
        <h1 className="text-3xl font-bold mt-6 mb-5">Find Us On</h1>
        <div className="sidebar-social">
          <div className="icon-item p-4">
            <a href="#" className="flex items-center text-xl gap-2">
              <FaFacebookF className="icon-circle" /> <span>Facebook</span>
            </a>
          </div>
          <div className="icon-item p-4">
            <a href="#" className="flex items-center text-xl gap-2">
              <FaXTwitter className="icon-circle" /> <span>Twitter</span>
            </a>
          </div>
          <div className="icon-item p-4">
            <a href="#" className="flex items-center text-xl gap-2">
              <FaInstagram className="icon-circle" /> <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
