import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../redux/products";
import useInput from "../hook/useInput";

import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const SingleProduct = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(true);
  const img_url = useInput("");
  const model = useInput("");
  const year = useInput("");
  const price = useInput("");

  const user = useSelector((state) => state.logger.user);
  const { id } = useParams();
  const singleProduct = useSelector((state) => state.cars.singleProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const handleClickSave = (e) => {
    e.preventDefault();
    setEdit(!edit);
    axios
      .put(`http://localhost:3001/api/admin/update/${id}`, {
        img_url: img_url.value,
        model: model.value,
        year: year.value,
        price: price.value,
      })
      .then((data) => {
        if (data.status === 200) {
          toast.success("Elemento editado!, redirigiendo...", {
            duration: 1000,
            position: "top-center",
          });
          dispatch(getSingleProduct(id));
        }
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <div className="flex justify-center">
      <div className="px-10 py-20 ">
        <div className="max-w-xs rounded-md overflow-hidden shadow-lg">
          <div>
            {edit ? (
              <img src={singleProduct?.img_url} alt="" />
            ) : (
              <>
                <input
                  {...img_url}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="URL"
                  value={!edit ? null : singleProduct?.img_url}
                />
              </>
            )}
          </div>
          <div className="py-4 px-4 bg-white">
            <label className="ftext-md font-semibold text-black">Modelo</label>
            <input
              {...model}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              value={!edit ? null : singleProduct?.model}
            />
            <label className="ftext-md font-semibold text-black">Año</label>
            <input
              {...year}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              value={!edit ? null : singleProduct?.year}
            />
            <label className="ftext-md font-semibold text-black">Precio:</label>
            <input
              {...price}
              type="number"
              name="price"
              className="bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter rounded-l-none "
              value={!edit ? null : singleProduct?.price}
            />
            <span className="flex items-center justify-center mt-4 w-full py-1 rounded">
              {user?.admin === true ? (
                <div className="space-x-5">
                  {edit ? (
                    <button
                      className="font-semibold text-gray-800 border"
                      onClick={() => setEdit(!edit)}
                    >
                      Editar
                    </button>
                  ) : (
                    <div className="space-x-5">
                      <button
                        className="font-semibold text-red-800 border"
                        onClick={() => setEdit(!edit)}
                      >
                        Descartar
                      </button>
                      <button
                        className="font-semibold text-green-800 border"
                        onClick={handleClickSave}
                      >
                        Guardar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
