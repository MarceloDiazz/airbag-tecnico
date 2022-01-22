import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        {/* LOGO */}
        <a href="/" class="flex">
         <img src="https://cdn2.iconfinder.com/data/icons/rounded-set-1/512/Car-512.png" alt="Todo autos" className="h-12 w-12" />
        </a>
        <input type="text" id="email-adress-icon" class="flex ml-40 text-center p-2 h-8 w-1/3 text-gray-900 bg-gray-50 rounded-lg border" placeholder="Buscar"/>
        <div
          class="flex justify-end items-center w-auto"
          id="mobile-menu-3"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li className="bg-blue-400 rounded">
              <a
                href="/login"
                class="block py-2 pr-4 pl-3 text-slate-50 hover:bg-blue-900 rounded"
              >
                Iniciar sesion
              </a>
            </li>
            <li className="bg-green-400 rounded ">
              <a
                href="/register"
                class="block py-2 pr-4 pl-3 text-slate-50 hover:bg-green-900 rounded"
              >
                Registrate
              </a>
            </li>
           {/*  <li className="bg-red-400 rounded">
              <a
                href="#2"
                class="block py-2 pr-4 pl-3 text-slate-50 hover:bg-red-900 rounded"
              >
                Salir
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
