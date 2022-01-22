import React from "react";

const Card = ({cars}) => {
  return (
    <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div className="h-10">
        <img
          src={cars.img_url}
          alt={cars.make}
        />
      </div>
      <div class="py-4 px-4 text-center ">
        <h3 class="text-md font-semibold text-white text-center bg-gray-600 rounded opacity-90">
        Marca: {cars.make.toUpperCase()}
        </h3>
        <span class="text-xs text-white bg-gray-600 p-1 rounded opacity-90">
        Modelo: {cars.model.toUpperCase()}
        </span>
        <p class="mt-4 text-lg font-thin text-white ">${cars.price}</p>
        
      </div>
    </div>
  );
};

export default Card;
