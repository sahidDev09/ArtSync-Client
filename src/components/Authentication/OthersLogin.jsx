import googlelogin from "../../assets/Googlelogin.png";
import githubLogin from "../../assets/Githublogin.png";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

const OthersLogin = () => {
  const { googleLogin, gitLogin } = useContext(AuthContext);

  // code for navigation route

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        //navigate route
        toast.success("Logged in");
        setTimeout(() => {
          navigate(from);
        }, 1000);
      }
    });
  };

  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div
        onClick={() => handleSocial(googleLogin)}
        className=" cursor-pointer google bg-slate-400 hover:bg-slate-700 hover:border border-green-500 p-2 rounded-md flex items-center gap-2">
        <div className=" p-2 bg-slate-200 w-10 rounded-md">
          <img src={googlelogin} alt="" />
        </div>
        <h1 className=" text-white text-sm lg:text-normal">
          With <span className=" font-semibold">Google</span>
        </h1>
      </div>

      <div
        onClick={() => handleSocial(gitLogin)}
        className=" hover:border border-green-500 cursor-pointer github bg-slate-800 hover:bg-slate-500 p-2 rounded-md flex items-center gap-2">
        <div className=" p-2 bg-slate-200 w-10 rounded-md">
          <img src={githubLogin} alt="" />
        </div>
        <h1 className=" text-white text-sm lg:text-normal">
          With <span className=" font-semibold">Github</span>
        </h1>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OthersLogin;
