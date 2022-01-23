import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchMake } from "../redux/products";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="bg-gray-400 text-white text-center font-roboto text-4xl py-5">
      <div>
        <div className="flex justify-around p-10">
          <Link to="/" className="mt-2">
            <button
              className="hover:scale-105 transition duration-500"
              onClick={(e) => {
                e.preventDefault();
                dispatch(searchMake("not"));
              }}
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/14-transportation-automotive/cars.png"
                alt="Todo autos"
                className="h-10 w-12"
              />
            </button>
          </Link>
          <Link to="/chevrolet">
            <button
              className="-m-5 hover:scale-105 transition duration-500"
              onClick={(e) => {
                e.preventDefault();
                dispatch(searchMake("chevrolet"));
              }}
            >
              <img
                src="https://gogeticon.net/files/1659505/f8dd73be66f5cddc89327e25a4cf49b2.png"
                alt="Todo autos"
                className="h-24 w-12"
              />
            </button>
          </Link>
          <Link to="/audi">
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(searchMake("audi"));
              }}
              className="hover:scale-105 transition duration-500"
            >
              <img
                src="https://www.pngplay.com/wp-content/uploads/6/Audi-Icon-PNG-HD-Quality.png"
                alt="Todo autos"
                className="h-16 w-12"
              />
            </button>
          </Link>
          <Link to="/ford">
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(searchMake("ford"));
              }}
              className="hover:scale-105 transition duration-500"
            >
              <img
                src="https://www.nicepng.com/png/full/64-641682_ford-png-vector-stock-ford-logo-icon.png"
                alt="Todo autos"
                className="h-12 w-12"
              />
            </button>
          </Link>
          <Link to="/bmw">
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(searchMake("bmw"));
              }}
              className="hover:scale-105 transition duration-500"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/bmw-2849931-2370665.png"
                alt="Todo autos"
                className="h-12 w-12"
              />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
