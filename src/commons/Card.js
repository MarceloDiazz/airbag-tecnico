import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/products";
import { getProducts } from "../redux/products";
import { Toaster, toast } from "react-hot-toast";

const Card = ({ cars }) => {
  const user = useSelector((state) => state.logger.user);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(cars._id))
      .then((data) => {
        if (data.type === "delProduct/fulfilled") {
          toast.success("Elemento borrado exitosamente!", {
            duration: 1000,
            position: "top-center",
          });
        }
      })
      .then(() => dispatch(getProducts()));
  };

  return (
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 relative">
      <div className="h-60">
        {user?.admin === true ? (
          <div className="space-x-52 absolute">
            <button
              onClick={handleDelete}
              className=" bg-red-500 focus:outline-none hover:bg-red-600 rounded text-xs ml-4 mt-4 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <Link to={`/product/${cars._id}`}>
              <button className=" bg-blue-500 focus:outline-none hover:bg-blue-600 rounded text-xs mr-4 mt-4 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        ) : (
          <Link to={`/product/${cars._id}`}>
            <button className="absolute  bg-blue-500 focus:outline-none hover:bg-blue-600 rounded text-xs ml-4 mt-4 p-1">
              Ver más
            </button>
          </Link>
        )}
        <img className="h-full w-full" src={cars.img_url} alt={cars.make} />
      </div>
      <div className="py-4 px-4 bg-gray-900">
        <h3 className="text-md font-semibold text-white  bg-gray-600 rounded opacity-75 text-center">
          {cars.make.toUpperCase()}
        </h3>
      </div>
      <Toaster />
    </div>
  );
};

export default Card;
