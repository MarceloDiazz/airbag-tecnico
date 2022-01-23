import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../../hook/useInput";
import { Toaster, toast } from "react-hot-toast";
import { postProduct } from "../../redux/products";

const CreateProduct = () => {
  const img_url = useInput("");
  const model = useInput("");
  const price = useInput("");
  const make = useInput("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postProduct({
        img_url: img_url.value,
        make: make.value,
        model: model.value,
        price: price.value,
      })
    ).then((data) => {
      if (data.type === "postProduct/fulfilled") {
        toast.success("Producto creado!, redirigiendo...", {
          duration: 2000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    });
  };

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-lg h-full"
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Crear producto
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="image"
            >
              Imagen
            </label>
            <input
              {...img_url}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="url"
              id="url"
              placeholder="URL"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="model"
            >
              Modelo
            </label>
            <input
              {...model}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="Nombre del producto"
            />
          </div>
          <label
            htmlFor="company-size"
            className="text-gray-800 font-semibold block my-3 text-md "
          >
            <div class="flex flex-col">
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="model"
              >
                Precio
              </label>
              <div class="flex flex-row">
                <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
                  $
                </span>
                <input
                  {...price}
                  type="number"
                  name="price"
                  class="bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter rounded-l-none "
                />
              </div>
            </div>
            Marca:
          </label>
          <div>
            <div className="mt-1">
              <select
                name="company-size"
                id="company-size"
                className="rounded"
                {...make}
              >
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="ford">Ford</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Postear
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateProduct;
