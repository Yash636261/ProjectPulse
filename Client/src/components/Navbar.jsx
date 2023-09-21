import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("current user:", user);

  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  const changeMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="px-5 flex justify-between items-center bg-black text-white h-12">
        <div className="flex font-bold cursor-default">
          <img
            className="h-5 w-5 mx-2 my-auto"
            src="https://img.icons8.com/?size=512&id=104233&format=png"
            alt=""
          />
          <p className="my-auto">ProjectPulse</p>
        </div>
        <div className="font-semibold capitalize max-md:hidden">
          <div className="flex justify-center cursor-pointer">
            <Link to="/" className="mx-3 hover:text-blue-300">
              Home
            </Link>
            <Link to="/about" className="mx-3 hover:text-blue-300">
              about
            </Link>
            <Link to="/contact" className="mx-3 hover:text-blue-300">
            contact us
            </Link>
            <div className="mx-3 hover:text-blue-300">explore</div>
          </div>
        </div>
        <div className="relative flex">
          <div className="md:hidden my-auto">
            <button
              onClick={changeToggle}
              className="border border-gray-600 rounded-lg h-8 w-8 p-1 mx-2 transition duration-200 hover:scale-110"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#607D8B"
                  d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="my-auto">
            {isAuthenticated && (
              <img onClick={changeMenu} src={user.picture} className="border-0 h-8 w-8 rounded-full  object-cover" alt="" />
            )}
          </div>

          {menu && (
            <div className="absolute top-16 right-5 p-5 border-0 rounded-lg bg-black z-10">
            {isAuthenticated && (
              <div className="flex flex-col border-b-2 py-1 break-normal border-gray-500">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            )}

              <div className="capitalize flex flex-col py-2 w-48">
                <Link to="/profile" className="mx-2 my-1 hover:text-gray-300">
                  Profile
                </Link>
                <div className="mx-2 my-1 hover:text-gray-300">settings </div>

                {isAuthenticated ? (
                  <button
                    onClick={() => logout()}
                    className="bg-blue-600 transition duration-200 hover:bg-blue-700 border-0 rounded-md mx-2 my-1 py-1 hover:text-gray-300"
                  >
                    logout
                  </button>
                ) : (
                  <button
                    onClick={()=> loginWithRedirect()}
                    className="bg-blue-600 transition duration-200 hover:bg-blue-700 border-0 rounded-md mx-2 my-1 py-1 hover:text-gray-300"
                  >
                    LogIn
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {toggle && (
        <div className="absolute w-full bg-slate-800 text-white font-semibold md:hidden py-5">
          <div className="capitalize flex flex-col">
            <Link to="/" className="mx-3 my-1 hover:text-blue-300">
              Home
            </Link>
            <Link to="/about" className="mx-3 my-1 hover:text-blue-300">
              about{" "}
            </Link>
            <div className="mx-3 my-1 hover:text-blue-300">contact us</div>
            <div className="mx-3 my-1 hover:text-blue-300">explore</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
