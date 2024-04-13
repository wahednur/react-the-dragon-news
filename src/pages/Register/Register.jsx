import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div className="vh flex flex-col justify-center">
          <div className="w-full md:w-1/2 flex flex-col mx-auto p-4 lg:p-20 rounded-lg border-violet-500 justify-center border">
            <h1 className="text-3xl font-bold text-center">
              Register your account
            </h1>
            <div className="mt-10 text-start">
              <form onSubmit={handleRegister}>
                <div className="form-group flex flex-col text-left">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter your Name"
                    className="bg-gray-200 p-3 mt-2"
                  />
                </div>
                <div className="form-group flex flex-col text-left mt-6">
                  <label htmlFor="photo">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    id=""
                    placeholder="Enter your Photo url"
                    className="bg-gray-200 p-3 mt-2"
                  />
                </div>
                <div className="form-group flex flex-col text-left mt-8">
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
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                    className="bg-gray-200 p-3 mt-2"
                  />
                </div>
                <div className="form-group flex gap-3 mt-8 text-left">
                  <input type="checkbox" name="" id="" />
                  <p>Accept Term & Conditions</p>
                </div>
                <button className="mt-8 w-full bg-[#403F3F] text-white p-4 font-bold hover:bg-slate-600">
                  Register
                </button>
                <p className="text-center mt-5">
                  If You Have An Account ?{" "}
                  <Link className="text-red-500" to="/login">
                    {" "}
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
