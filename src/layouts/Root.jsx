import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins container mx-auto mt-[50px]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
