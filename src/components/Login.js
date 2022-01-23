import React from "react";
import useInput from "../hook/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { postUserLoged } from "../redux/registration";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postUserLoged({ email: email.value, password: password.value })
    ).then((data) => {
      if (data.type === "userLoged/fulfilled") {
        toast.success("Logueo exitoso!, redirigiendo...", {
          duration: 1000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else if (data.type === "userLoged/rejected") {
        toast.error("Error Login :( , verifica correo y/o contraseña", {
          duration: 2000,
          position: "top-center",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Iniciar sesión</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleSubmit}>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              {...email}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              {...password}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
