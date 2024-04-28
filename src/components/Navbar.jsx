import { Link, NavLink } from "react-router-dom";
import mainlogo from "../assets/mainLogo.png";
import stockProfile from "../assets/profile.png";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handlelogOut = () => {
    toast.error("Logged out");
    setInterval(() => {
      logOut();
    }, 1000);
  };

  const allLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/artsCrafts">Art & craft</NavLink>
      </li>
      <li>
        <NavLink to="/addarts">Add Crafts</NavLink>
      </li>
      <li>
        <NavLink to="/mycraft">My Art&Craft</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {allLinks}
          </ul>
        </div>
        <Link to="/">
          <img className=" w-40" src={mainlogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{allLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className=" flex items-center gap-2">
            <div
              data-tip={user.displayName}
              className=" tooltip tooltip-bottom w-12 h-12 rounded-full border p-1">
              <img
                className=" object-cover rounded-full h-full w-full"
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL || stockProfile}
              />
            </div>

            <Link>
              <button
                onClick={handlelogOut}
                className="btn bg-success text-white">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-success text-white">Login</button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
