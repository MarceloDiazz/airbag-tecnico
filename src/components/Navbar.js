import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendLogoutRequest, setUser } from "../redux/registration";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.logger.user);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest()).then(() => {
      if (user?.admin === true) {
        toast.success("Chau admin!", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 100);
      }
      toast.success("Gracias por visitarnos!", {
        duration: 4000,
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/");
      }, 100);
    });
  };

  return (
    <nav className="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 relative">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        {/* LOGO */}
        <Link to="/" className="flex">
          <img
            src="https://cdn2.iconfinder.com/data/icons/rounded-set-1/512/Car-512.png"
            alt="Todo autos"
            className="h-12 w-12"
          />
        </Link>
        <span className="text-white text-2xl font-alegreya">
          LOS MEJORES AUTOS
        </span>
        {user ? (
          <div className="flex justify-end items-center w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="bg-red-400 rounded">
                <button
                  onClick={handleClick}
                  href="#2"
                  className="block py-2 pr-4 pl-3 text-slate-50 hover:bg-red-900 rounded"
                >
                  Salir
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex justify-end items-center w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="bg-blue-400 rounded">
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-slate-50 hover:bg-blue-900 rounded"
                >
                  Iniciar sesion
                </Link>
              </li>
              <li className="bg-green-400 rounded ">
                <Link
                  to="/register"
                  className="block py-2 pr-4 pl-3 text-slate-50 hover:bg-green-900 rounded"
                >
                  Registrate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Toaster />
    </nav>
  );
};

export default Navbar;
