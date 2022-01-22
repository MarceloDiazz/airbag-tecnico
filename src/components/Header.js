import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white text-center font-roboto text-4xl">
      <div className="pt-10">
        <span>LOS MEJORES AUTOS USADOS</span>
        <div className="flex justify-center space-x-9 mt-10">
          <a href="#2" class="">
            <img
              src="https://gogeticon.net/files/1659505/f8dd73be66f5cddc89327e25a4cf49b2.png"
              alt="Todo autos"
              className="h-12 w-12"
            />
          </a>
          <a href="#2" class="">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logo-cars/512/48.png"
              alt="Todo autos"
              className="h-12 w-12"
            />
          </a>
          <a href="#2" class="">
            <img
              src="https://www.nicepng.com/png/full/64-641682_ford-png-vector-stock-ford-logo-icon.png"
              alt="Todo autos"
              className="h-12 w-12"
            />
          </a>
          <a href="#2" class="">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/bmw-2849931-2370665.png"
              alt="Todo autos"
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
