import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import useInput from "../hook/useInput";
import { postUserRegister } from "../redux/registration";
import { useName, useEmail, usePassword } from "../hook/logger";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, onChangeName, validateName } = useName();
  const { email, onChangeEmail, validateEmail } = useEmail();
  const { password, onChangePassword, validatePassword } = usePassword();

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordValidate = validatePassword();
    const emailValidate = validateEmail();
    const nameValidate = validateName();
    if (passwordValidate.error) return toast.error(passwordValidate.message);
    if (emailValidate.error) return toast.error(emailValidate.message);
    if (nameValidate.error) return toast.error(nameValidate.message);

    dispatch(
      postUserRegister({ name: name, email: email, password: password })
    ).then((data) => {
      if (data.type === "userRegister/fulfilled") {
        toast.success("Cuenta creada!, redirigiendo...", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else if (data.type === "userRegister/rejected") {
        toast.error("error :(", {
          duration: 4000,
          position: "top-center",
        });
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Registrate</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleSubmit}>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Name
            </label>
            <input
              onChange={onChangeName}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              onChange={onChangeEmail}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              onChange={onChangePassword}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Registrar</span>
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
    </div>
  );
};

export default Register;
