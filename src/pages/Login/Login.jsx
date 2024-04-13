import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location trace from Loin page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        // use navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-full block">
        <Navbar></Navbar>
      </div>
      <div className="vh flex flex-col justify-center">
        <div className="w-full md:w-1/2 flex flex-col mx-auto p-4 lg:p-20 rounded-lg border-violet-500 justify-center border">
          <h1 className="text-3xl font-bold text-center">Login your account</h1>
          <div className="mt-10 text-start">
            <form onSubmit={handleLogin}>
              <div className="form-group flex flex-col text-left">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email address"
                  className="bg-gray-200 p-3 mt-2"
                />
              </div>
              <div className="form-group flex flex-col text-left mt-6">
                <label htmlFor="password">Email address</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter your password"
                  className="bg-gray-200 p-3 mt-2"
                />
              </div>
              <button className="mt-8 w-full bg-[#403F3F] text-white p-4 font-bold hover:bg-slate-600">
                Login
              </button>
              <p className="text-center mt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
