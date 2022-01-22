import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import useInput from "../hook/useInput"
import { postUserRegister } from '../redux/registration';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useInput("");
  const email = useInput("");
  const password = useInput(""); 

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postUserRegister({name:name.value, email:email.value, password:password.value}))
    .then((data) => {
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
  }
    return (
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="font-bold text-center text-2xl mb-5">Registrate</h1>  
          <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <form class="px-5 py-7" onSubmit={handleSubmit}>
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
              <input {...name} type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input {...email} type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input {...password} type='password' class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span class="inline-block mr-2">Registrar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      )
};

export default Register;
